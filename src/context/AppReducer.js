import { actionTypes } from './AppReducer.constants';

function reducer(state, action) {
  try {
    if (!state || !action) {
      throw new Error('Reducer params has not been provided!');
    }

    if ('type' in action) {
      const { type, payload } = action;

      for (let i = 0; i < actionTypes.length; i++) {
        const key = actionTypes[i];
        if (actionTypes.includes(type) === false) {
          throw new Error(`Invalid type "${type}" in action payload!`);
        } else if (key === type) {
          return {
            ...state,
            [key]: payload,
          };
        }
      }
    } else if (typeof action === 'object') {
      if (Object.keys(action).length === 0) {
        throw new Error('Reducer action object is empty!');
      }

      let newState = {
        ...state,
      };

      for (const key in action) {
        const value = action[key];
        if (actionTypes.includes(key) === false) {
          throw new Error(`Invalid type "${key}" in action object!`);
        }

        newState = {
          ...newState,
          [key]: value,
        };
      }

      return newState;
    }

    return state;
  } catch (error) {
    console.error('Error in AppReducer: ', error);
    return state;
  }
}

export { actionTypes, reducer };
