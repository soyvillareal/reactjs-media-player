import React from 'react';
import ReactDOM from 'react-dom';

import {
  StyledContextMenuChecked,
  StyledContextMenuContainer,
  StyledContextMenuItem,
  StyledContextMenuLabel,
} from './ContextMenu.styled';
import { mergeRefs } from '../../utils';
import CheckedIcon from '../Commons/Icons/CheckedIcon';
import useAppDispatch from '../../hooks/context/useAppDispatch';
import useAppSelector from '../../hooks/context/useAppSelector';

const ContextMenu = React.forwardRef(({ fullscreen, position, menuItems }, ref) => {
  const state = useAppSelector();
  const dispatch = useAppDispatch();

  const menuRef = React.useRef();
  const [menuChecked, setMenuChecked] = React.useState({});

  const portalRool = React.useMemo(() => {
    if (fullscreen) {
      return state.playerRef?.current;
    }
    return document.body;
  }, [fullscreen, state.playerRef]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        (!menuRef.current.contains(event.target) ||
          !Array.from(menuRef.current?.querySelectorAll('*'))
            .map((el) => el.contains(event.target))
            .includes(true))
      ) {
        dispatch({
          type: 'contextMenuVisible',
          payload: false,
        });
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch, menuRef]);

  const menuContent = (
    <StyledContextMenuContainer
      ref={mergeRefs([ref, menuRef])}
      showing={state.contextMenuVisible}
      positionX={position.x}
      positionY={position.y}
      data-itemindex="0"
      aria-checked={state.contextMenuVisible}
    >
      {menuItems.map((item, i) => (
        <StyledContextMenuItem
          key={i}
          onClick={() => {
            item.action();
            dispatch({
              type: 'contextMenuVisible',
              payload: false,
            });
            setMenuChecked((prev) => ({ ...prev, [i]: !prev[i] }));
          }}
          isFullscreen={fullscreen}
        >
          {item.icon}
          <StyledContextMenuLabel>{item.label}</StyledContextMenuLabel>
          {item.isCheckable && (menuChecked[i] || item.defaultChecked) && (
            <StyledContextMenuChecked>
              <CheckedIcon width={24} height={24} />
            </StyledContextMenuChecked>
          )}
        </StyledContextMenuItem>
      ))}
    </StyledContextMenuContainer>
  );

  return ReactDOM.createPortal(menuContent, portalRool);
});

ContextMenu.displayName = 'ContextMenu';

export default React.memo(
  ContextMenu,
  (p, n) => p.fullscreen === n.fullscreen && p.position === n.position && p.menuItems === n.menuItems,
);
