import React from 'react';

import { AppContext } from '../../context/AppContext';

const useAppDispatch = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const enhancedDispatch = React.useCallback(
    (action) => {
      if (typeof action === 'function') {
        const resolvedAction = action(state);
        dispatch(resolvedAction);
      } else {
        dispatch(action);
      }
    },
    [state],
  );

  return enhancedDispatch;
};

export default useAppDispatch;
