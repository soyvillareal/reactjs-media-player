import { reducer, actionTypes } from '../../src/context/AppReducer';

const initialState = {
  i18n: {},
  contextMenuVisible: false,
  controlsHovering: false,
  hiding: false,
  menuVisible: false,
  subMenuVisible: false,
  timeSliding: false,
  volumeSliding: false,
  videoRef: null,
  playerRef: null,
};

describe('AppReducer', () => {
  describe('type-based actions', () => {
    test.each(actionTypes)('handles action type "%s"', (type) => {
      const action = { type, payload: 'test_value' };
      const newState = reducer(initialState, action);
      expect(newState[type]).toBe('test_value');
    });

    test('sets hiding to true', () => {
      const newState = reducer(initialState, { type: 'hiding', payload: true });
      expect(newState.hiding).toBe(true);
    });

    test('sets menuVisible to true', () => {
      const newState = reducer(initialState, { type: 'menuVisible', payload: true });
      expect(newState.menuVisible).toBe(true);
    });

    test('sets contextMenuVisible to true', () => {
      const newState = reducer(initialState, { type: 'contextMenuVisible', payload: true });
      expect(newState.contextMenuVisible).toBe(true);
    });

    test('sets timeSliding to true', () => {
      const newState = reducer(initialState, { type: 'timeSliding', payload: true });
      expect(newState.timeSliding).toBe(true);
    });

    test('sets volumeSliding to true', () => {
      const newState = reducer(initialState, { type: 'volumeSliding', payload: true });
      expect(newState.volumeSliding).toBe(true);
    });

    test('does not mutate original state', () => {
      const frozen = Object.freeze({ ...initialState });
      expect(() => reducer(frozen, { type: 'hiding', payload: true })).not.toThrow();
    });

    test('returns state unchanged when type is invalid', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const newState = reducer(initialState, { type: 'INVALID_ACTION', payload: true });
      expect(newState).toEqual(initialState);
      consoleSpy.mockRestore();
    });
  });

  describe('object-based actions (no type key)', () => {
    test('merges multiple keys at once', () => {
      const action = { menuVisible: true, subMenuVisible: true };
      const newState = reducer(initialState, action);
      expect(newState.menuVisible).toBe(true);
      expect(newState.subMenuVisible).toBe(true);
    });

    test('handles videoRef assignment', () => {
      const ref = { current: document.createElement('video') };
      const newState = reducer(initialState, { videoRef: ref });
      expect(newState.videoRef).toBe(ref);
    });

    test('handles playerRef assignment', () => {
      const ref = { current: document.createElement('div') };
      const newState = reducer(initialState, { playerRef: ref });
      expect(newState.playerRef).toBe(ref);
    });

    test('returns state and logs error when action object has invalid key', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const newState = reducer(initialState, { invalidKey: true });
      expect(newState).toEqual(initialState);
      consoleSpy.mockRestore();
    });

    test('returns state and logs error when action object is empty', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const newState = reducer(initialState, {});
      expect(newState).toEqual(initialState);
      consoleSpy.mockRestore();
    });
  });

  describe('error handling', () => {
    test('returns state when action is null', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const newState = reducer(initialState, null);
      expect(newState).toEqual(initialState);
      consoleSpy.mockRestore();
    });

    test('returns state when state is null', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const newState = reducer(null, { type: 'hiding', payload: true });
      expect(newState).toBeNull();
      consoleSpy.mockRestore();
    });
  });
});
