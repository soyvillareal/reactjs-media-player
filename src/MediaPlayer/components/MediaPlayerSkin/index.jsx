import React from 'react';

import PlayerProxy from '../../../core/PlayerProxy';
import PlayerSkin from '../../../PlayerSkin';
import { playerStateInitial } from './MediaPlayerSkin.constants';
import MediaPlayerWrapper from '../MediaPlayerWrapper';
import usePlayerProxy from '../../hooks/usePlayerProxy';
import { StyledPlayerContainer } from './MediaPlayerSkin.styled';

const MediaPlayerSkin = React.forwardRef((props, ref) => {
  const [playerStyles, setPlayerStyles] = React.useState({});
  const [playerState, setPlayerState] = React.useState({
    ...playerStateInitial,
    isPIP: props.pip,
    isMuted: props.muted,
    playbackRate: props.playbackRate,
    loop: props.loop,
    playing: props.playing,
    volume: props.muted ? 0 : (props.volume ?? playerStateInitial.volume),
  });

  React.useEffect(() => {
    setPlayerState((prevState) => ({
      ...prevState,
      isPIP: props.pip,
      playbackRate: props.playbackRate,
      loop: props.loop,
      playing: props.playing,
      volume: props.muted ? 0 : (props.volume ?? playerStateInitial.volume),
    }));
  }, [props.muted, props.volume, props.playing, props.pip, props.playbackRate, props.loop]);

  const playerSkinRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const preventedMemorized = React.useMemo(
    () => props.prevented || (props.playing && props.muted),
    [props.muted, props.playing, props.prevented],
  );

  React.useEffect(() => {
    if (props.player && playerState.isLoading === false) {
      const playerProxy = props.player;
      const playerElement = playerProxy.getPlayer();

      const timer = setTimeout(() => {
        setPlayerStyles({
          width: `${playerElement.offsetWidth}px`,
          height: `${playerElement.offsetHeight}px`,
        });
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [props.player, playerState.isLoading]);

  const { videoUrl, ...playerProxy } = usePlayerProxy({
    onBuffer: props.onBuffer,
    onBufferEnd: props.onBufferEnd,
    onDisablePIP: props.onDisablePIP,
    onDuration: props.onDuration,
    onEnablePIP: props.onEnablePIP,
    onEnded: props.onEnded,
    onError: props.onError,
    onPause: props.onPause,
    onPlay: props.onPlay,
    onPlayBackQualityChange: props.onPlayBackQualityChange,
    onPlayBackRateChange: props.onPlayBackRateChange,
    onProgress: props.onProgress,
    onReady: props.onReady,
    onSeek: props.onSeek,
    onStart: props.onStart,
    onLoaded: props.onLoaded,
    onMount: props.onMount,
    updateState: setPlayerState,
    playerState,
    extraProps: {
      url: props.url,
      sources: props.sources,
      fullHDQualityBreak: props.fullHDQualityBreak,
      prevented: preventedMemorized,
    },
  });

  return (
    <MediaPlayerWrapper
      tabIndex={0}
      role="application"
      dir="ltr"
      ref={playerRef}
      onKeyDown={playerSkinRef.current?.handleKeyDown}
      style={playerStyles}
    >
      <StyledPlayerContainer>
        {videoUrl && (
          <PlayerProxy
            ref={ref}
            activePlayer={props.activePlayer}
            controls={props.controls}
            loop={playerState.loop}
            muted={playerState.isMuted}
            pip={playerState.isPIP}
            playbackRate={playerState.playbackRate}
            playbackQuality={playerState.playbackQuality}
            playsinline={props.playsinline}
            progressInterval={props.progressInterval}
            stopOnUnmount={props.stopOnUnmount}
            volume={playerState.volume}
            url={videoUrl}
            width={props.width}
            height={props.height}
            playing={playerState.playing}
            config={{
              attributes: props.config.attributes,
              tracks: props.config.tracks,
              forceVideo: props.config.forceVideo,
              forceHLS: props.config.forceHLS,
              dashVersion: props.config.dashVersion,
              forceDASH: props.config.forceDASH,
              forceFLV: props.config.forceFLV,
              flvVersion: props.config.flvVersion,
              forceLoad: props.config.forceLoad,
              forceDisableHls: props.config.forceDisableHls,
              hlsOptions: props.config.hlsOptions,
              hlsVersion: props.config.hlsVersion,
              forceSafariHLS: props.config.forceSafariHLS,
              loopOnEnded: props.config.loopOnEnded,
            }}
            disableDeferredLoading={props.disableDeferredLoading}
            progressFrequency={props.progressFrequency}
            {...playerProxy}
          />
        )}
      </StyledPlayerContainer>
      <PlayerSkin
        ref={playerSkinRef}
        playerRef={playerRef}
        url={videoUrl}
        sources={props.sources}
        hasAudio={playerState.hasAudio}
        spriteVTTFile={props.spriteVTTFile}
        hasResource={typeof videoUrl === 'string' || props.sources.length > 0}
        kernelMsg={playerState.kernelError}
        loading={playerState.isLoading}
        prevented={preventedMemorized}
        muted={playerState.isMuted}
        paused={playerState.playing === false}
        live={props.live}
        buffered={playerState.loaded}
        ended={playerState.isEnded}
        seeking={playerState.seeking}
        waiting={props.waiting}
        duration={playerState.duration}
        currentTime={playerState.played}
        volume={playerState.volume}
        playbackRate={playerState.playbackRate}
        pictureInPictureEnabled={true}
        pip={playerState.isPIP}
        loop={playerState.loop}
        fullscreen={playerState.isFullScreen}
        fullHDQualityBreak={props.fullHDQualityBreak}
        language={props.language}
        poster={props.poster}
        updateState={setPlayerState}
        player={props.player}
      />
    </MediaPlayerWrapper>
  );
});

MediaPlayerSkin.displayName = 'MediaPlayerSkin';

export default React.memo(
  MediaPlayerSkin,
  (p, n) =>
    p.url === n.url &&
    p.sources === n.sources &&
    p.fullHDQualityBreak === n.fullHDQualityBreak &&
    p.spriteVTTFile === n.spriteVTTFile &&
    p.prevented === n.prevented &&
    p.waiting === n.waiting &&
    p.playing === n.playing &&
    p.loop === n.loop &&
    p.controls === n.controls &&
    p.volume === n.volume &&
    p.muted === n.muted &&
    p.paused === n.paused &&
    p.live === n.live &&
    p.pip === n.pip &&
    p.playbackRate === n.playbackRate &&
    p.width === n.width &&
    p.height === n.height &&
    p.progressInterval === n.progressInterval &&
    p.playsinline === n.playsinline &&
    p.pipeline === n.pipeline &&
    p.stopOnUnmount === n.stopOnUnmount &&
    p.activePlayer === n.activePlayer &&
    p.player === n.player &&
    p.progressFrequency === n.progressFrequency &&
    p.disableDeferredLoading === n.disableDeferredLoading &&
    p.language === n.language &&
    p.poster === n.poster &&
    p.config === n.config &&
    p.onReady === n.onReady &&
    p.onStart === n.onStart &&
    p.onPlay === n.onPlay &&
    p.onPause === n.onPause &&
    p.onBuffer === n.onBuffer &&
    p.onBufferEnd === n.onBufferEnd &&
    p.onEnded === n.onEnded &&
    p.onError === n.onError &&
    p.onDuration === n.onDuration &&
    p.onSeek === n.onSeek &&
    p.onPlayBackRateChange === n.onPlayBackRateChange &&
    p.onPlayBackQualityChange === n.onPlayBackQualityChange &&
    p.onProgress === n.onProgress &&
    p.onEnablePIP === n.onEnablePIP &&
    (p.onDisablePIP === n.onDisablePIP) & (p.onLoaded === n.onLoaded) &&
    p.onMount === n.onMount,
);
