import React from 'react';
import PropTypes from 'prop-types';

import { StyledControls } from './Controls.styled';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import useAppSelector from '../../hooks/context/useAppSelector';

const Controls = ({ children }) => {
  const state = useAppSelector();
  const dispatch = useAppDispatch();

  const onMouseEnter = React.useCallback(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const matched = window.matchMedia('(hover: none), (pointer: coarse)');
      if (matched && matched.matches) {
        return;
      }
    }
    dispatch({ type: 'controlsHovering', payload: true });
  }, []);

  const onMouseLeave = React.useCallback(() => {
    dispatch({ type: 'controlsHovering', payload: false });
  }, []);

  return (
    <StyledControls hiding={state.hiding} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </StyledControls>
  );
};

Controls.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default React.memo(Controls, (p, n) => p.children === n.children);
