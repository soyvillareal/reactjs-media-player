import React, { useCallback, useEffect } from 'react';

import Duration from './components/Duration';
import screenfull from './utils/fullscreen';
import ReactJSMediaPlayer from '../../../lib';
import { version } from '../../../package.json';
import { IState } from './types/App.types';

const SEPARATOR = ' · ';

const App = () => {
  const urlInputRef = React.useRef<HTMLInputElement>(null);
  const ref = React.useRef<any>();

  const [state, setState] = React.useState<IState>({
    url: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    pip: false,
    playing: false,
    controls: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
  });

  const load = useCallback((url) => {
    setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
      controls: false,
      duration: 0,
      loop: false,
      muted: false,
      playbackRate: 1.0,
      playing: false,
      seeking: false,
      volume: 0.8,
    });
  }, []);

  const handlePlayPause = useCallback(() => {
    setState((prev) => ({ ...prev, playing: !prev.playing }));
  }, []);

  const handleStop = useCallback(() => {
    setState((prev) => ({ ...prev, url: null, playing: false }));
  }, []);

  const handleToggleControls = useCallback(() => {
    setState((prev) => ({
      ...prev,
      controls: !prev.controls,
      url: null,
    }));
  }, []);

  useEffect(() => {
    const url = state.url;
    load(url);
  }, [load, state.url]);

  const handleToggleLoop = useCallback(() => {
    setState((prev) => ({ ...prev, loop: !prev.loop }));
  }, []);

  const handleVolumeChange = useCallback((e) => {
    setState((prev) => ({ ...prev, volume: parseFloat(e.target.value) }));
  }, []);

  const handleToggleMuted = useCallback(() => {
    setState((prev) => ({ ...prev, muted: !prev.muted }));
  }, []);

  const handleSetPlaybackRate = useCallback((e) => {
    setState((prev) => ({ ...prev, playbackRate: parseFloat(e.target.value) }));
  }, []);

  const handleOnPlaybackRateChange = useCallback((speed) => {
    setState((prev) => ({ ...prev, playbackRate: parseFloat(speed) }));
  }, []);

  const handleTogglePIP = useCallback(() => {
    setState((prev) => ({ ...prev, pip: !prev.pip }));
  }, []);

  const handlePlay = () => {
    setState((prev) => ({ ...prev, playing: true }));
  };

  const handleEnablePIP = useCallback(() => {
    setState((prev) => ({ ...prev, pip: true }));
  }, []);

  const handleDisablePIP = useCallback(() => {
    setState((prev) => ({ ...prev, pip: false }));
  }, []);

  const handlePause = useCallback(() => {
    setState((prev) => ({ ...prev, playing: false }));
  }, []);

  const handleSeekMouseDown = useCallback((e) => {
    setState((prev) => ({ ...prev, seeking: true }));
  }, []);

  const handleSeekChange = useCallback((e) => {
    setState((prev) => ({ ...prev, played: parseFloat(e.target.value) }));
  }, []);

  const handleSeekMouseUp = useCallback((e) => {
    if (ref.current) {
      setState((prev) => ({ ...prev, seeking: false }));
      ref.current.seekTo(parseFloat(e.target.value));
    }
  }, []);

  const handleProgress = useCallback(
    (progress) => {
      // We only want to update time slider if we are not currently seeking
      if (!state.seeking) {
        setState((prev) => ({
          ...prev,
          loaded: progress.loaded,
          loadedSeconds: progress.loadedSeconds,
          played: progress.played,
          playedSeconds: progress.playedSeconds,
        }));
      }
    },
    [state.seeking],
  );

  const handleEnded = useCallback(() => {
    setState((prev) => ({ ...prev, playing: prev.loop }));
  }, []);

  const handleDuration = useCallback((duration) => {
    setState((prev) => ({ ...prev, duration }));
  }, []);

  const handleClickFullscreen = useCallback(() => {
    const player = document.querySelector<HTMLElement>('div[role="application"]');
    if (player !== null) {
      screenfull.request(player);
    }
  }, []);

  const renderLoadButton = useCallback(
    (url: string, label: string) => {
      return (
        <button type="button" onClick={() => load(url)}>
          {label}
        </button>
      );
    },
    [load],
  );

  return (
    <div className="app">
      <section className="section">
        <h1>ReactJSMediaPlayer Demo</h1>
        <div className="player-wrapper">
          <ReactJSMediaPlayer
            ref={ref}
            className="reactjs-player"
            width="100%"
            height="100%"
            url={state.url}
            language="es"
            spriteVTTFile="./uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_sprite.vtt"
            poster="./example-poster.jpg"
            fullHDQualityBreak={720}
            // sources={[
            //   {
            //     src: '/uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_1080_4800000_load.m3u8',
            //     resolution: 1080,
            //   },
            //   {
            //     src: '/uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_720_2400000_load.m3u8',
            //     resolution: 720,
            //   },
            //   {
            //     src: '/uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_540_1200000_load.m3u8',
            //     resolution: 540,
            //   },
            //   {
            //     src: '/uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_360_800000_load.m3u8',
            //     type: 'application/x-mpegURL',
            //     resolution: 360,
            //   },
            //   {
            //     src: '/uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_270_400000_load.m3u8',
            //     resolution: 270,
            //   },
            //   {
            //     src: '/uploads/videos/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_144p_load.m3u8',
            //     resolution: 144,
            //   },
            // ]}
            prevented={false}
            waiting={false}
            playing={state.playing}
            muted={state.muted}
            pip={state.pip}
            controls={state.controls}
            loop={state.loop}
            playbackRate={state.playbackRate}
            volume={state.volume}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={handlePlay}
            onEnablePIP={handleEnablePIP}
            onDisablePIP={handleDisablePIP}
            onPause={handlePause}
            onBuffer={() => console.log('onBuffer')}
            onPlayBackRateChange={handleOnPlaybackRateChange}
            onSeek={(e) => console.log('onSeek', e)}
            onEnded={handleEnded}
            onError={(e) => console.log('onError', e)}
            onProgress={handleProgress}
            onDuration={handleDuration}
            onPlayBackQualityChange={(e) => console.log('onPlayBackQualityChange', e)}
          />
        </div>

        <table>
          <tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handlePlayPause}>{state.playing ? 'Pause' : 'Play'}</button>
                <button onClick={handleClickFullscreen}>Fullscreen</button>
                {ReactJSMediaPlayer.canEnablePIP(state.url) && (
                  <button onClick={handleTogglePIP}>{state.pip ? 'Disable PiP' : 'Enable PiP'}</button>
                )}
              </td>
            </tr>
            <tr>
              <th>Speed</th>
              <td>
                <button onClick={handleSetPlaybackRate} value={1}>
                  1x
                </button>
                <button onClick={handleSetPlaybackRate} value={1.5}>
                  1.5x
                </button>
                <button onClick={handleSetPlaybackRate} value={2}>
                  2x
                </button>
              </td>
            </tr>
            <tr>
              <th>Seek</th>
              <td>
                <input
                  type="range"
                  min={0}
                  max={0.999999}
                  step="any"
                  value={state.played}
                  onMouseDown={handleSeekMouseDown}
                  onChange={handleSeekChange}
                  onMouseUp={handleSeekMouseUp}
                />
              </td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>
                <input type="range" min={0} max={1} step="any" value={state.volume} onChange={handleVolumeChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="controls">Controls</label>
              </th>
              <td>
                <input id="controls" type="checkbox" checked={state.controls} onChange={handleToggleControls} />
                <em>&nbsp; Requires player reload</em>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="muted">Muted</label>
              </th>
              <td>
                <input id="muted" type="checkbox" checked={state.muted} onChange={handleToggleMuted} />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="loop">Loop</label>
              </th>
              <td>
                <input id="loop" type="checkbox" checked={state.loop} onChange={handleToggleLoop} />
              </td>
            </tr>
            <tr>
              <th>Played</th>
              <td>
                <progress max={1} value={state.played} />
              </td>
            </tr>
            <tr>
              <th>Loaded</th>
              <td>
                <progress max={1} value={state.loaded} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="section">
        <table>
          <tbody>
            <tr>
              <th>Files</th>
              <td>
                {renderLoadButton(
                  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
                  'mp4',
                )}
                {renderLoadButton(
                  'https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm',
                  'webm',
                )}
                {renderLoadButton(
                  'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
                  'HLS (m3u8)',
                )}
                <br />
                {renderLoadButton(
                  'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mpd',
                  'DASH (mpd)',
                )}
              </td>
            </tr>
            <tr>
              <th>Custom URL</th>
              <td>
                <input ref={urlInputRef} type="text" placeholder="Enter URL" />
                <button
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      url: urlInputRef?.current !== null ? urlInputRef.current.value : null,
                    }))
                  }
                >
                  Load
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>State</h2>

        <table>
          <tbody>
            <tr>
              <th>url</th>
              <td className={!state.url ? 'faded' : ''}>
                {(state.url instanceof Array ? 'Multiple' : state.url) || 'null'}
              </td>
            </tr>
            <tr>
              <th>playing</th>
              <td>{state.playing ? 'true' : 'false'}</td>
            </tr>
            <tr>
              <th>volume</th>
              <td>{state.volume.toFixed(3)}</td>
            </tr>
            <tr>
              <th>speed</th>
              <td>{state.playbackRate}</td>
            </tr>
            <tr>
              <th>played</th>
              <td>{state.played.toFixed(3)}</td>
            </tr>
            <tr>
              <th>loaded</th>
              <td>{state.loaded.toFixed(3)}</td>
            </tr>
            <tr>
              <th>duration</th>
              <td>
                <Duration seconds={state.duration} />
              </td>
            </tr>
            <tr>
              <th>elapsed</th>
              <td>
                <Duration seconds={state.duration * state.played} />
              </td>
            </tr>
            <tr>
              <th>remaining</th>
              <td>
                <Duration seconds={state.duration * (1 - state.played)} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className="footer">
        Version <strong>{version}</strong>
        {SEPARATOR}
        <a href="https://github.com/soyvillareal/reactjs-media-player">GitHub</a>
        {SEPARATOR}
        <a href="https://www.npmjs.com/package/reactjs-media-player">npm</a>
      </footer>
    </div>
  );
};

export default App;
