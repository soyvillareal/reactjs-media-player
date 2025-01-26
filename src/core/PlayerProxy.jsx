import React from 'react';
import isEqual from 'react-fast-compare';

import { propTypes, defaultProps } from './props.types';
import { isMediaStream } from '../utils';

const SEEK_ON_PLAY_EXPIRY = 5000;

export default class PlayerProxy extends React.Component {
  static displayName = 'PlayerProxy';
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  progressTimeout = 0;
  durationCheckTimeout = 0;
  prevPlayed = 0;
  prevLoaded = 0;
  player = null;

  loadOnReady = null;
  seekOnPlay = null;

  mounted = false;
  isReady = false;
  isPlaying = false; // Track playing state internally to prevent bugs
  isLoading = true; // Use isLoading to prevent onPause when switching URL
  startOnPlay = true;
  onDurationCalled = false;

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    clearTimeout(this.progressTimeout);
    clearTimeout(this.durationCheckTimeout);
    if (this.isReady && this.props.stopOnUnmount) {
      this.player.stop();

      if (this.player.disablePIP) {
        this.player.disablePIP();
      }
    }
    this.mounted = false;
  }

  componentDidUpdate(prevProps) {
    // If there isn’t a player available, don’t do anything
    if (!this.player) {
      return;
    }
    // Invoke player methods based on changed props
    const { url, playing, volume, muted, playbackRate, playbackQuality, pip, activePlayer, disableDeferredLoading } =
      this.props;

    if (isEqual(prevProps.url, url) === false) {
      if (this.isLoading && !activePlayer?.forceLoad && !disableDeferredLoading && !isMediaStream(url)) {
        console.warn(`ReactJSMediaPlayer: the attempt to load ${url} is being deferred until the player has loaded`);
        this.loadOnReady = url;
        return;
      }
      this.isLoading = true;
      this.startOnPlay = true;
      this.onDurationCalled = false;
      this.player.load(url, this.isReady);
      if (prevProps.playbackQuality !== playbackQuality) {
        this.player.seekTo(this.prevPlayed);
      }
    }
    if (prevProps.playing === false && playing && this.isPlaying === false) {
      this.player.play();
    }
    if (prevProps.playing && playing === false && this.isPlaying) {
      this.player.pause();
    }
    if (prevProps.pip === false && pip && this.player.enablePIP) {
      this.player.enablePIP();
    }
    if (prevProps.pip && pip === false && this.player.disablePIP) {
      this.player.disablePIP();
    }
    if (prevProps.volume !== volume && volume !== null) {
      this.player.setVolume(volume);
    }
    if (prevProps.muted !== muted) {
      if (muted) {
        this.player.mute();
      } else {
        this.player.unmute();
        if (volume !== null) {
          // Set volume next tick to fix a bug with DailyMotion
          setTimeout(() => this.player.setVolume(volume));
        }
      }
    }
    if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
      this.player.setPlaybackRate(playbackRate);
    }
  }

  handlePlayerMount = (player) => {
    // if (this.player) {
    //   this.progress(); // Ensure onProgress is still called in strict mode
    //   return; // Return here to prevent loading twice in strict mode
    // }
    this.player = player;
    this.player.load(this.props.url);
    this.progress();
  };

  getDuration() {
    if (this.isReady === false) {
      return null;
    }
    return this.player.getDuration();
  }

  getCurrentTime() {
    if (this.isReady === false) {
      return null;
    }
    return this.player.getCurrentTime();
  }

  getSecondsLoaded() {
    if (this.isReady === false) {
      return null;
    }
    return this.player.getSecondsLoaded();
  }

  getInternalPlayer = (key) => {
    if (!this.player) {
      return null;
    }
    return this.player[key];
  };

  getPlayer() {
    return this.player.getPlayer();
  }

  progress = () => {
    if (this.props.url && this.player && this.isReady) {
      const playedSeconds = this.getCurrentTime() || 0;
      const loadedSeconds = this.getSecondsLoaded();
      const duration = this.getDuration();

      if (duration) {
        // Check this types
        const progress = {
          playedSeconds,
          played: playedSeconds / duration,
          loadedSeconds: null,
        };
        // Check this types
        if (loadedSeconds !== null) {
          progress.loadedSeconds = loadedSeconds;
          progress.loaded = loadedSeconds / duration;
        }
        // Only call onProgress if values have changed
        if (progress.playedSeconds !== this.prevPlayed || progress.loadedSeconds !== this.prevLoaded) {
          this.props.onProgress({
            loaded: progress.loaded,
            loadedSeconds: progress.loadedSeconds,
            played: progress.played,
            playedSeconds: progress.playedSeconds,
          });
        }
        this.prevPlayed = progress.playedSeconds;
        if (progress.loadedSeconds !== undefined) {
          this.prevLoaded = progress.loadedSeconds;
        }
      }
    }
    this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
  };

  seekTo(amount, type, keepPlaying) {
    // When seeking before player is ready, store value and seek later
    if (this.isReady === false) {
      if (amount !== 0) {
        this.seekOnPlay = amount;
        setTimeout(() => {
          this.seekOnPlay = null;
        }, SEEK_ON_PLAY_EXPIRY);
      }
      return;
    }
    const isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';
    if (isFraction) {
      // Convert fraction to seconds based on duration
      const duration = this.player.getDuration();
      if (!duration) {
        console.warn('ReactJSMediaPlayer: could not seek using fraction – duration not yet available');
        return;
      }
      this.player.seekTo(duration * amount, keepPlaying);
      return;
    }
    this.player.seekTo(amount, keepPlaying);
  }

  handleReady = () => {
    if (this.mounted === false) {
      return;
    }
    this.isReady = true;
    this.isLoading = false;
    const { onReady, playing, volume, muted } = this.props;
    if (onReady) {
      onReady();
    }
    if (!muted && volume !== null) {
      this.player.setVolume(volume);
    }
    if (this.loadOnReady) {
      this.player.load(this.loadOnReady, true);
      this.loadOnReady = null;
    } else if (playing) {
      this.player.play();
    }
    this.handleDurationCheck();
  };

  handlePlay = (e) => {
    this.isPlaying = true;
    this.isLoading = false;
    const { onStart, onPlay, playbackRate } = this.props;
    if (this.startOnPlay) {
      if (this.player.setPlaybackRate && playbackRate !== 1) {
        this.player.setPlaybackRate(playbackRate);
      }
      if (onStart) {
        onStart();
      }
      this.startOnPlay = false;
    }
    if (onPlay) {
      onPlay(e);
    }
    if (this.seekOnPlay) {
      this.seekTo(this.seekOnPlay);
      this.seekOnPlay = null;
    }
    this.handleDurationCheck();
  };

  handlePause = (e) => {
    this.isPlaying = false;
    if (!this.isLoading && this.props.onPause) {
      this.props.onPause(e);
    }
  };

  handleEnded = () => {
    const { activePlayer, loop, onEnded } = this.props;

    if (
      activePlayer.defaultProps !== undefined &&
      activePlayer.defaultProps.config !== undefined &&
      activePlayer.defaultProps.config.loopOnEnded &&
      loop === true
    ) {
      this.seekTo(0);
    }
    if (loop === false) {
      this.isPlaying = false;
      if (onEnded) {
        onEnded();
      }
    }
  };

  handleError = (e, data, hls, Hls) => {
    this.isLoading = false;
    if (this.props.onError) {
      this.props.onError(e, data, hls, Hls);
    }
  };

  handleDurationCheck = () => {
    clearTimeout(this.durationCheckTimeout);
    const duration = this.getDuration();
    if (duration) {
      if (!this.onDurationCalled && this.props.onDuration) {
        this.props.onDuration(duration);
        this.onDurationCalled = true;
      }
    } else {
      this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
    }
  };

  handleLoaded = () => {
    // Sometimes we know loading has stopped but onReady/onPlay are never called
    // so this provides a way for players to avoid getting stuck
    this.isLoading = false;
  };

  render() {
    const Player = this.props.activePlayer;

    if (!Player) {
      return null;
    }

    return (
      <Player
        loop={this.props.loop}
        muted={this.props.muted}
        playsinline={this.props.playsinline}
        url={this.props.url}
        width={this.props.width}
        height={this.props.height}
        playing={this.props.playing}
        config={this.props.config}
        onMount={this.handlePlayerMount}
        onReady={this.handleReady}
        onPlay={this.handlePlay}
        onPause={this.handlePause}
        onEnded={this.handleEnded}
        onLoaded={this.handleLoaded}
        onError={this.handleError}
        onBuffer={this.props.onBuffer}
        onBufferEnd={this.props.onBufferEnd}
        onDisablePIP={this.props.onDisablePIP}
        onEnablePIP={this.props.onEnablePIP}
        onPlayBackRateChange={this.props.onPlayBackRateChange}
        onSeek={this.props.onSeek}
      />
    );
  }
}
