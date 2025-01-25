import React from 'react';

import {
  StyledDropdownContent,
  StyledDropdownHeader,
  StyledDropdownItem,
  StyledDropdownItemValueSub,
  StyledDropdownList,
} from './DropdownOverlay.styled';
import ArrowLeftIcon from '../../../../Commons/Icons/ArrowLeftIcon';
import StyledGeneralButton from '../../../../Commons/Buttons/StyledGeneralButton';
import useAppSelector from '../../../../../hooks/context/useAppSelector';

const DropdownOverlay = React.forwardRef(
  ({ title, options, value, hiding, isFullscreen, onClick, goBack, ...rest }, ref) => {
    const { i18n } = useAppSelector();
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
      setShow(false);
      if (hiding) {
        setTimeout(() => {
          setShow(true);
        }, 100);
      }
    }, [hiding]);

    return (
      <div ref={ref} {...rest}>
        <StyledDropdownHeader>
          <StyledGeneralButton onClick={goBack} isFullscreen={isFullscreen} isText>
            <ArrowLeftIcon width={28} height={28} />
            <span>{title}</span>
          </StyledGeneralButton>
        </StyledDropdownHeader>
        <StyledDropdownContent show={show}>
          <StyledDropdownList>
            {options.map((option, i) => (
              <StyledDropdownItem key={i} selected={option.value === value} isFullscreen={isFullscreen}>
                <StyledGeneralButton onClick={() => onClick(option.value)} isFullscreen={isFullscreen} isText>
                  {option.label}
                  {'isFullHD' in option && option.isFullHD && (
                    <StyledDropdownItemValueSub>{i18n.hd}</StyledDropdownItemValueSub>
                  )}
                </StyledGeneralButton>
              </StyledDropdownItem>
            ))}
          </StyledDropdownList>
        </StyledDropdownContent>
      </div>
    );
  },
);

DropdownOverlay.displayName = 'DropdownOverlay';

export default DropdownOverlay;
