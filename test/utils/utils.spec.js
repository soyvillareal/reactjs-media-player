import { omit, isMediaStream, isBlobUrl, mergeRefs, formatTime, indexBy } from '../../src/utils';

describe('utils/index', () => {
  describe('omit', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };

    test('omits specified keys', () => {
      expect(omit(obj, ['a', 'b'])).toEqual({ c: 3, d: 4 });
    });

    test('returns full object when nothing to omit', () => {
      expect(omit(obj, [])).toEqual(obj);
    });

    test('handles multiple array args', () => {
      expect(omit(obj, ['a'], ['b'], ['c'])).toEqual({ d: 4 });
    });

    test('handles key not present in object', () => {
      expect(omit(obj, ['z'])).toEqual(obj);
    });
  });

  describe('isMediaStream', () => {
    test('returns true for MediaStream instance', () => {
      const stream = new MediaStream();
      expect(isMediaStream(stream)).toBe(true);
    });

    test('returns false for a string URL', () => {
      expect(isMediaStream('https://example.com/video.mp4')).toBe(false);
    });

    test('returns false for null', () => {
      expect(isMediaStream(null)).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isMediaStream(undefined)).toBe(false);
    });
  });

  describe('isBlobUrl', () => {
    test('returns true for blob URL', () => {
      expect(isBlobUrl('blob:https://example.com/abc-123')).toBe(true);
    });

    test('returns false for regular URL', () => {
      expect(isBlobUrl('https://example.com/video.mp4')).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(isBlobUrl('')).toBe(false);
    });
  });

  describe('mergeRefs', () => {
    test('calls function refs with value', () => {
      const fn1 = jest.fn();
      const fn2 = jest.fn();
      const merged = mergeRefs([fn1, fn2]);
      merged('test-value');
      expect(fn1).toHaveBeenCalledWith('test-value');
      expect(fn2).toHaveBeenCalledWith('test-value');
    });

    test('assigns to object refs', () => {
      const ref1 = { current: null };
      const ref2 = { current: null };
      const merged = mergeRefs([ref1, ref2]);
      merged('test-value');
      expect(ref1.current).toBe('test-value');
      expect(ref2.current).toBe('test-value');
    });

    test('handles mixed function and object refs', () => {
      const fn = jest.fn();
      const ref = { current: null };
      const merged = mergeRefs([fn, ref]);
      merged(42);
      expect(fn).toHaveBeenCalledWith(42);
      expect(ref.current).toBe(42);
    });

    test('ignores falsy refs', () => {
      const merged = mergeRefs([null, undefined, false]);
      expect(() => merged('value')).not.toThrow();
    });
  });

  describe('formatTime', () => {
    test('formats seconds under 1 hour as MM:SS', () => {
      expect(formatTime(90)).toBe('01:30');
    });

    test('formats 0 seconds', () => {
      expect(formatTime(0)).toBe('00:00');
    });

    test('formats seconds over 1 hour as HH:MM:SS', () => {
      expect(formatTime(3661)).toBe('01:01:01');
    });

    test('formats exactly 1 hour', () => {
      expect(formatTime(3600)).toBe('01:00:00');
    });

    test('formats 59 seconds', () => {
      expect(formatTime(59)).toBe('00:59');
    });

    test('pads single digit minutes and seconds', () => {
      expect(formatTime(65)).toBe('01:05');
    });
  });

  describe('indexBy', () => {
    test('indexes array by given key', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ];
      expect(indexBy(arr, 'id')).toEqual({
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
      });
    });

    test('returns empty object for empty array', () => {
      expect(indexBy([], 'id')).toEqual({});
    });

    test('last value wins on duplicate keys', () => {
      const arr = [
        { id: 1, name: 'Alice' },
        { id: 1, name: 'Bob' },
      ];
      expect(indexBy(arr, 'id')).toEqual({ 1: { id: 1, name: 'Bob' } });
    });
  });
});
