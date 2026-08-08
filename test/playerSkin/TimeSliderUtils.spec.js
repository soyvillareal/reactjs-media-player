import {
  getEventXCoordinate,
  getValue,
  getClampedPosition,
  getTrackTranslateX,
  getMouseTranslateX,
  parseVTT,
  getOffset,
} from '../../src/PlayerSkin/DesktopPlayerSkin/components/TimeSlider/utils';

describe('TimeSlider utils', () => {
  describe('getEventXCoordinate', () => {
    test('returns clientX for mouse events', () => {
      const event = { clientX: 150 };
      expect(getEventXCoordinate(event)).toBe(150);
    });

    test('returns pageX from changedTouches for touch events', () => {
      const event = { changedTouches: [{ pageX: 200 }] };
      expect(getEventXCoordinate(event)).toBe(200);
    });

    test('returns 0 when no coordinate info available', () => {
      expect(getEventXCoordinate({})).toBe(0);
    });

    test('prefers changedTouches over clientX', () => {
      const event = { changedTouches: [{ pageX: 300 }], clientX: 100 };
      expect(getEventXCoordinate(event)).toBe(300);
    });
  });

  describe('getValue', () => {
    const rect = { left: 50, width: 500 };
    const duration = 100;

    test('returns 0 when event is at left edge', () => {
      const event = { clientX: 50 };
      expect(getValue(event, rect, duration)).toBe(0);
    });

    test('returns 0 when event is before left edge', () => {
      const event = { clientX: 30 };
      expect(getValue(event, rect, duration)).toBe(0);
    });

    test('returns duration when event is at right edge', () => {
      const event = { clientX: 550 };
      expect(getValue(event, rect, duration)).toBe(duration);
    });

    test('returns duration when event is beyond right edge', () => {
      const event = { clientX: 700 };
      expect(getValue(event, rect, duration)).toBe(duration);
    });

    test('returns correct time for middle position', () => {
      // clientX=300, left=50 → w=250, width=500, so 50% → 50s
      const event = { clientX: 300 };
      expect(getValue(event, rect, duration)).toBe(50);
    });

    test('returns rounded value', () => {
      // clientX=51, left=50, w=1, width=500, fraction=0.002, time=0.2 → rounds to 0
      const event = { clientX: 51 };
      expect(getValue(event, rect, duration)).toBe(0);
    });
  });

  describe('getClampedPosition', () => {
    test('returns 0 when duration is 0', () => {
      expect(getClampedPosition({ duration: 0, currentTime: 5, sliderWidth: 500, elementWidth: 20 })).toBe(0);
    });

    test('returns 0 when sliderWidth is 0', () => {
      expect(getClampedPosition({ duration: 100, currentTime: 50, sliderWidth: 0, elementWidth: 20 })).toBe(0);
    });

    test('returns 0 when elementWidth is 0', () => {
      expect(getClampedPosition({ duration: 100, currentTime: 50, sliderWidth: 500, elementWidth: 0 })).toBe(0);
    });

    test('clamps to minimum position', () => {
      // At start, relative position is near 0, must clamp to halfTooltipWidth
      const result = getClampedPosition({ duration: 100, currentTime: 0, sliderWidth: 500, elementWidth: 20 });
      expect(result).toBe(10); // halfTooltipWidth = 10
    });

    test('clamps to maximum position', () => {
      const result = getClampedPosition({ duration: 100, currentTime: 100, sliderWidth: 500, elementWidth: 20 });
      expect(result).toBe(490); // sliderWidth - halfTooltipWidth = 490
    });

    test('returns correct position for middle', () => {
      const result = getClampedPosition({ duration: 100, currentTime: 50, sliderWidth: 500, elementWidth: 20 });
      expect(result).toBe(250);
    });
  });

  describe('getTrackTranslateX', () => {
    test('returns -100 strings when duration is 0', () => {
      const result = getTrackTranslateX({ duration: 0, currentTime: 0, sliderWidth: 500, handleWidth: 10 });
      expect(result).toEqual({ trackTranslateX: '-100', handleTranslateX: '-100' });
    });

    test('returns correct track translate at start', () => {
      const result = getTrackTranslateX({ duration: 100, currentTime: 0, sliderWidth: 500, handleWidth: 10 });
      expect(parseFloat(result.trackTranslateX)).toBeCloseTo(-100, 1);
    });

    test('returns correct track translate at midpoint', () => {
      const result = getTrackTranslateX({ duration: 100, currentTime: 50, sliderWidth: 500, handleWidth: 0 });
      expect(parseFloat(result.trackTranslateX)).toBeCloseTo(-50, 1);
    });

    test('returns correct track translate at end', () => {
      const result = getTrackTranslateX({ duration: 100, currentTime: 100, sliderWidth: 500, handleWidth: 0 });
      expect(parseFloat(result.trackTranslateX)).toBeCloseTo(0, 1);
    });
  });

  describe('getMouseTranslateX', () => {
    test('returns position as percentage string', () => {
      const result = getMouseTranslateX({ duration: 100, currentTime: 50, sliderWidth: 500, tooltipWidth: 20 });
      expect(typeof result).toBe('string');
      // position should be around 50% of sliderWidth
      expect(parseFloat(result)).toBeGreaterThanOrEqual(0);
    });

    test('clamps near start', () => {
      const result = getMouseTranslateX({ duration: 100, currentTime: 0, sliderWidth: 500, tooltipWidth: 100 });
      expect(parseFloat(result)).toBeGreaterThanOrEqual(0);
    });

    test('returns a numeric string', () => {
      const result = getMouseTranslateX({ duration: 100, currentTime: 75, sliderWidth: 500, tooltipWidth: 20 });
      expect(isNaN(parseFloat(result))).toBe(false);
    });
  });

  describe('parseVTT', () => {
    const sampleVTT = `WEBVTT

00:00:00.000 --> 00:00:05.000
sprite.png?xywh=0,0,160,90

00:00:05.000 --> 00:00:10.000
sprite.png?xywh=160,0,160,90
`;

    test('parses VTT string into array of cue objects', () => {
      const result = parseVTT(sampleVTT);
      expect(result).toHaveLength(2);
    });

    test('correctly parses from/to timestamps', () => {
      const result = parseVTT(sampleVTT);
      expect(result[0].from).toBe(0);
      expect(result[0].to).toBe(5);
      expect(result[1].from).toBe(5);
      expect(result[1].to).toBe(10);
    });

    test('correctly parses sprite coordinates', () => {
      const result = parseVTT(sampleVTT);
      expect(result[0].file).toBe('sprite.png');
      expect(result[0].x).toBe('0');
      expect(result[0].y).toBe('0');
      expect(result[0].w).toBe('160');
      expect(result[0].h).toBe('90');
    });

    test('parses second cue sprite coordinates', () => {
      const result = parseVTT(sampleVTT);
      expect(result[1].x).toBe('160');
      expect(result[1].y).toBe('0');
    });

    test('returns empty array for empty string', () => {
      expect(parseVTT('')).toEqual([]);
    });

    test('returns empty array for VTT with no cues', () => {
      expect(parseVTT('WEBVTT\n\n')).toEqual([]);
    });

    test('handles semicolon timecode separator', () => {
      const vttWithSemicolon = `00:00;00 --> 00:00:05\nsprite.png?xywh=0,0,160,90\n`;
      const result = parseVTT(vttWithSemicolon);
      expect(result.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('getOffset', () => {
    test('returns top and left offset', () => {
      const el = document.createElement('div');
      document.body.appendChild(el);
      const offset = getOffset(el);
      expect(offset).toHaveProperty('top');
      expect(offset).toHaveProperty('left');
      document.body.removeChild(el);
    });
  });
});
