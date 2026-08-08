import React from 'react';

import useAppDispatch from './context/useAppDispatch';
import useAppSelector from './context/useAppSelector';
import InLoopIcon from '../PlayerSkin/Commons/Icons/InLoopIcon';
import PipIcon from '../PlayerSkin/Commons/Icons/PipIcon';
import { buildIconProps } from '../PlayerSkin/Commons/constants';

const usePlayerSkinWrapped = ({
  fullscreen,
  contextMenuRef,
  pictureInPictureEnabled,
  pip,
  loop = false,
  requestPictureInPicture,
  exitPictureInPicture,
  onLoopClick,
}) => {
  const dispatch = useAppDispatch();
  const { i18n } = useAppSelector();

  const [cMPosition, setCMPosition] = React.useState({ x: 0, y: 0 });

  const handleContextMenu = React.useCallback(
    (event) => {
      event.preventDefault();
      const contextMenuWidth = contextMenuRef.current?.offsetWidth || 0;
      const contextMenuHeight = contextMenuRef.current?.offsetHeight || 0;
      const contextMenuPageX = event.pageX;
      const contextMenuPageY = event.pageY;
      const documentElement = document.documentElement;
      const playerScrollLeft = documentElement.scrollLeft || 0;
      const playerScrollTop = documentElement.scrollTop || 0;
      const playerClientLeft = documentElement.clientLeft || 0;
      const playerClientTop = documentElement.clientTop || 0;
      const playerInnerWidth = window.innerWidth || 0;
      const playerInnerHeight = window.innerHeight || 0;

      const calcScrollAndDocumentLeft = (window.pageXOffset || playerScrollLeft) - (playerClientLeft || 0);
      const calcScrollAndDocumentTop = (window.pageYOffset || playerScrollTop) - (playerClientTop || 0);
      const left =
        contextMenuPageX + contextMenuWidth > playerInnerWidth + calcScrollAndDocumentLeft
          ? contextMenuPageX - contextMenuWidth
          : contextMenuPageX;
      const top =
        contextMenuPageY + contextMenuHeight > playerInnerHeight + calcScrollAndDocumentTop
          ? contextMenuPageY - contextMenuHeight
          : contextMenuPageY;
      setCMPosition({ x: left, y: top });
      dispatch({
        type: 'contextMenuVisible',
        payload: true,
      });
    },
    [contextMenuRef, dispatch],
  );

  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  const menuItemsMemorized = React.useMemo(() => {
    const menuItems = [
      {
        action: () => onLoopClick(),
        label: i18n.loop,
        icon: <InLoopIcon {...iconProps} />,
        isCheckable: true,
        defaultChecked: loop,
      },
    ];
    if (pictureInPictureEnabled) {
      menuItems.push({
        action: () => (pip ? exitPictureInPicture() : requestPictureInPicture()),
        label: i18n.pictureInPicture,
        icon: <PipIcon {...iconProps} />,
        isCheckable: false,
        defaultChecked: false,
      });
    }

    return menuItems;
  }, [iconProps, i18n, pictureInPictureEnabled, pip, loop, requestPictureInPicture, exitPictureInPicture, onLoopClick]);

  return {
    handleContextMenu,
    contextMenuPosition: cMPosition,
    contextMenuItems: menuItemsMemorized,
  };
};

export default usePlayerSkinWrapped;
