import ReactJSMediaPlayer from '../src';

describe('ReactJSMediaPlayer - static methods', () => {
  test('canPlay()', () => {
    expect(
      ReactJSMediaPlayer.canPlay(
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      ),
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
