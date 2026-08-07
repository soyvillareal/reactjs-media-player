import ReactJSMediaPlayer from '../src';

describe('ReactJSMediaPlayer - static methods', () => {
  test('canPlay()', () => {
    expect(
      ReactJSMediaPlayer.canPlay('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'),
    ).toBeTruthy();
    expect(
      ReactJSMediaPlayer.canPlay('https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mpd'),
    ).toBeTruthy();
    expect(ReactJSMediaPlayer.canPlay('https://www.w3schools.com/tags/mov_bbb.mp4')).toBeTruthy();
    expect(
      ReactJSMediaPlayer.canPlay(
        'https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm',
      ),
    ).toBeTruthy();
    // expect(ReactJSMediaPlayer.canPlay('http://example.com/random/path')).toBeTruthy();
  });
});
