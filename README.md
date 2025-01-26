<h1 align='center'>
  ReactJS Media Player
</h1>

<p align='center'>
  <a href='https://www.npmjs.com/package/reactjs-media-player'><img src='https://img.shields.io/npm/v/reactjs-media-player.svg' alt='Latest npm version'></a>
  <a href='https://codecov.io/gh/soyvillareal/reactjs-media-player'><img src='https://img.shields.io/codecov/c/github/soyvillareal/reactjs-media-player.svg' alt='Test Coverage'></a>
  <a href='https://www.patreon.com/soyvillareal'><img src='https://img.shields.io/badge/sponsor-patreon-fa6854.svg' alt='Become a sponsor on Patreon'></a>
</p>

<p align='center'>
  A ReactJS component for playing HLS, FLV, Dash and mp4 files.
  Not using ReactJS? <a href='#standalone-player'>No problem ;)</a>
</p>

---

### ✨ The future of ReactJS Media Player
ReactJS Media Player is maintained [by me](https://soyvillareal.com). I'm committed to improving video tools for developers, but anyone who wants to contribute is welcome.

ReactJS Media Player is and will remain open source, for a higher rate of fixes and releases over time. Thanks to all community members for their continued support.

### Usage

```bash
npm install reactjs-media-player # or yarn add reactjs-media-player
```

```jsx
import React from 'react';
import ReactJSMediaPlayer from 'reactjs-media-player';

// Render a HLS video player
<ReactJSMediaPlayer url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />;
```

If your build system supports `import()` statements, use `reactjs-media-player/lazy` to lazy load the appropriate player for the `url` you pass in. This adds several `ReactJS Media Player` chunks to your output, but reduces your main bundle size.

```jsx
import React from 'react';
import ReactJSMediaPlayerLazy from 'reactjs-media-player/lazy';

// Lazy load the YouTube player
<ReactJSMediaPlayerLazy url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />;
```

Demo page: [`https://soyvillareal.github.io/reactjs-media-player`](https://soyvillareal.github.io/reactjs-media-player)

The component parses a URL and loads in the appropriate markup and external SDKs to play media from [various sources](#supported-media). [Props](#props) can be passed in to control playback and react to events such as buffering or media ending. See [the demo source](https://github.com/soyvillareal/reactjs-media-player/blob/master/examples/react/src/App.jsx) for a full example.

For platforms without direct use of `npm` modules, a minified version of `ReactJS Media Player` is located in `dist` after installing. To generate this file yourself, checkout the repo and run `npm run build:dist`.

#### Autoplay

As of Chrome 66, [videos must be `muted` in order to play automatically](https://www.theverge.com/2018/3/22/17150870/google-chrome-autoplay-videos-sound-mute-update). Some players, like Facebook, cannot be unmuted until the user interacts with the video, so you may want to enable `controls` to allow users to unmute videos themselves. Please set `muted={true}`.

### Props

Prop | Description | Default
---- | ----------- | -------
`url` | The url of a video to play<br/>&nbsp; ◦ &nbsp;Can be an [file](#supported-media) or [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) object
`playing` | Set to `true` or `false` to pause or play the media | `false`
`loop` | Set to `true` or `false` to loop the media | `false`
`light` | Set to `true` to show just the video thumbnail, which loads the full player on click<br />&nbsp; ◦ &nbsp;Pass in an image URL to override the preview image | `false`
`volume` | Set the volume of the player, between `0` and `1`<br/>&nbsp; ◦ &nbsp;`null` uses default volume on all players | `null`
`muted` | Mutes the player<br/>&nbsp; ◦ &nbsp;Only works if `volume` is set | `false`
`playbackRate` | Set the playback rate of the player | `1`
`width` | Set the width of the player | `640px`
`height` | Set the height of the player | `360px`
`style` | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the root element | `{}`
`progressInterval` | The time between `onProgress` callbacks, in milliseconds | `1000`
`playsinline` | Applies the `playsinline` attribute where supported | `false`
`pip` | Set to `true` or `false` to enable or disable [picture-in-picture mode](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture)<br/>&nbsp; ◦ &nbsp;Only available when playing file URLs in [certain browsers](https://caniuse.com/#feat=picture-in-picture) | `false`
`stopOnUnmount` | If you are using `pip` you may want to use `stopOnUnmount={false}` to continue playing in picture-in-picture mode even after ReactJSMediaPlayer unmounts | `true`
`fallback` | Element or component to use as a fallback if you are using lazy loading | `null`
`wrapper` | Element or component to use as the container element | `div`
`config` | Override options for the various players, see [config prop](#config-prop)
`sources` | Set array of objects with information about the files to play
`spriteVTTFile` | Set the sprite file to display images on a timeline
`fullHDQualityBreak` | Set the resolution to start from to indicate that a resolution is HD

#### Callback props

Callback props take a function that gets fired on various player events:

Prop | Description
---- | -----------
`onReady` | Called when media is loaded and ready to play. If `playing` is set to `true`, media will play immediately
`onStart` | Called when media starts playing
`onPlay` | Called when media starts or resumes playing after pausing or buffering
`onProgress` | Callback containing `played` and `loaded` progress as a fraction, and `playedSeconds` and `loadedSeconds` in seconds<br />&nbsp; ◦ &nbsp;eg `{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }`
`onDuration` | Callback containing duration of the media, in seconds
`onPause` | Called when media is paused
`onBuffer` | Called when media starts buffering
`onBufferEnd` | Called when media has finished buffering<br />&nbsp; ◦ &nbsp;Works for files, YouTube and Facebook
`onSeek` | Called when media seeks with `seconds` parameter
`onPlayBackRateChange` | Called when playback rate of the player changed
`onPlayBackQualityChange` | Called when playback quality of the player changed
`onEnded` | Called when media finishes playing<br />&nbsp; ◦ &nbsp;Does not fire when `loop` is set to `true`
`onError` | Called when an error occurs whilst attempting to play media
`onEnablePIP` | Called when picture-in-picture mode is enabled
`onDisablePIP` | Called when picture-in-picture mode is disabled


#### Config prop

There is a single `config` prop to override settings of player:

```jsx
<ReactJSMediaPlayer
  url={url}
  config={{
    forceHLS: true,
    hlsOptions: {
      enableWorker: true,
    },
  }}
/>
```

Settings for player live under different keys:

Key | Options
--- | -------
`file` | `attributes`: Apply [element attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video#Attributes)<br />`forceVideo`: Always render a `<video>` element<br />`forceHLS`: Use [hls.js](https://github.com/video-dev/hls.js) for HLS streams<br />`forceSafariHLS`: Use [hls.js](https://github.com/video-dev/hls.js) for HLS streams, even on Safari<br />`forceDisableHLS`: Disable usage [hls.js](https://github.com/video-dev/hls.js) for HLS streams<br />`forceDASH`: Always use [dash.js](https://github.com/Dash-Industry-Forum/dash.js) for DASH streams<br />`forceFLV`: Always use [flv.js](https://github.com/Bilibili/flv.js)<br />`hlsOptions`: Override the [default `hls.js` options](https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning)<br />`hlsVersion`: Override the [`hls.js`](https://github.com/video-dev/hls.js) version loaded from [`jsdelivr`](https://www.jsdelivr.com/package/npm/hls.js), default: `0.13.1`<br />`dashVersion`: Override the [`dash.js`](https://github.com/Dash-Industry-Forum/dash.js) version loaded from [`cdnjs`](https://cdnjs.com/libraries/dashjs), default: `2.9.2`<br />`flvVersion`: Override the [`flv.js`](https://github.com/Bilibili/flv.js) version loaded from [`jsdelivr`](https://www.jsdelivr.com/package/npm/flv.js), default: `1.5.0`

### Methods

#### Static Methods

Method | Description
------ | -----------
`ReactJSMediaPlayer.canPlay(url)` | Determine if a URL can be played. This does *not* detect media that is unplayable due to privacy settings, streaming permissions, etc. In that case, the `onError` prop will be invoked after attempting to play. Any URL that does not match any patterns will fall back to a native HTML5 media player.
`ReactJSMediaPlayer.canEnablePiP(url)` | Determine if a URL can be played in [picture-in-picture mode](https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture)

#### Instance Methods

Use [`ref`](https://facebook.github.io/react/docs/refs-and-the-dom.html) to call instance methods on the player. See [the demo app](examples/react/src/App.js) for an example of this.

Method | Description
------ | -----------
`seekTo(amount, type)` | Seek to the given number of seconds, or fraction if `amount` is between `0` and `1`<br />&nbsp; ◦ &nbsp;`type` parameter lets you specify `'seconds'` or `'fraction'` to override default behaviour
`getCurrentTime()` | Returns the number of seconds that have been played<br />&nbsp; ◦ &nbsp;Returns `null` if unavailable
`getSecondsLoaded()` | Returns the number of seconds that have been loaded<br />&nbsp; ◦ &nbsp;Returns `null` if unavailable or unsupported
`getDuration()` | Returns the duration (in seconds) of the currently playing media<br />&nbsp; ◦ &nbsp;Returns `null` if duration is unavailable
`getInternalPlayer()` | Returns the internal player of whatever is currently playing<br />&nbsp; ◦ &nbsp;eg the [YouTube player instance](https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player), or the [`<video>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) element when playing a video file<br />&nbsp; ◦ &nbsp;Use `getInternalPlayer('hls')` to get the [hls.js](https://github.com/video-dev/hls.js) player<br />&nbsp; ◦ &nbsp;Use `getInternalPlayer('dash')` to get the [dash.js](https://github.com/Dash-Industry-Forum/dash.js) player<br />&nbsp; ◦ &nbsp;Returns `null` if the internal player is unavailable

### Advanced Usage

#### Responsive player

Set `width` and `height` to `100%` and wrap the player in a [fixed aspect ratio box](https://css-tricks.com/aspect-ratio-boxes) to get a responsive player:

```js
class ResponsivePlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactJSMediaPlayer
          className="reactjs-media-player"
          url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
```

```css
.player-wrapper {
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
}

.reactjs-media-player {
  position: absolute;
  top: 0;
  left: 0;
}
```

See [`jsFiddle` example](https://jsfiddle.net/oqy10s8k/18/)

#### SDK Overrides

You can use your own version of any player SDK, assuming the correct `window` global is set before the player mounts. For example, to use a local version of [`hls.js`](https://cdnjs.com/libraries/hls.js), add `<script src='/path/hls.js'></script>` to your app. If `window.Hls` is available when `ReactJSMediaPlayer` mounts, it will use that instead of loading `hls.js` from `cdnjs`.

#### Standalone player

If you aren’t using React, you can still render a player using the standalone library:

```html
<script src="https://cdn.jsdelivr.net/npm/reactjs-media-player/dist/ReactJSMediaPlayer.standalone.js"></script>
<script>
  const container = document.getElementById('container');
  const url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';

  renderReactJSMediaPlayer(container, { url, playing: true });

  function pausePlayer() {
    renderReactJSMediaPlayer(container, { url, playing: false });
  }
</script>
```

See [`jsFiddle` example](https://jsfiddle.net/oqy10s8k/19/)

#### Mobile considerations

> The HTML5 `<video>` element, in certain mobile browsers (such as Chrome and Safari), only allows playback to take place if it’s initiated by a user interaction (such as tapping on the player).

#### Multiple Sources and Tracks

You can also specify a `type` for each source by using objects with `src` and `type` properties.

```jsx
<ReactJSMediaPlayer
  playing
  fullHDQualityBreak={720}
  spriteVTTFile="foo.vtt"
  sources={[
    { src: 'foo_1080.m3u8', resolution: 1080 },
    { src: 'foo_720.m3u8', resolution: 720 },
    { src: 'foo_480.m3u8', resolution: 480 },
    { src: 'foo_360.m3u8', resolution: 360 },
    { src: 'foo_240.m3u8', resolution: 240 },
    { src: 'foo_144.meu8', resolution: 144 },
  ]}
/>
```

[`<track>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) elements for subtitles can be added using `config.file`:

```jsx
<ReactJSMediaPlayer
  playing
  url="foo.mp4"
  config={{
    tracks: [
      { kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true },
      { kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja' },
      { kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de' },
    ],
  }}
/>
```

### Supported media

[Supported file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats) are playing using [`<video>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) elements

- HLS streams are played using [`hls.js`](https://github.com/video-dev/hls.js)
- DASH streams are played using [`dash.js`](https://github.com/Dash-Industry-Forum/dash.js)
- FLV streams are played using [`flv.js`](https://github.com/bilibili/flv.js)

### Contributing

See the [contribution guidelines](https://github.com/soyvillareal/reactjs-media-player/blob/master/CONTRIBUTING.md) before creating a pull request.

### Thanks

- Thanks to anyone who has [contributed](https://github.com/soyvillareal/reactjs-media-player/graphs/contributors).
- Big thanks to my [Patreon](https://patreon.com/soyvillareal) supporters!
