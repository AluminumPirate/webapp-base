import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AnimatedIconButtonProps extends Omit<IconButtonProps, 'onClick'> {
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const StyledButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isActive', // Prevent isActive from reaching the DOM element
})<{
  isActive: boolean;
}>(() => ({
  width: '24px', // Size of the icon area
  height: '24px',
  position: 'relative',
  padding: 0, // Remove default IconButton padding
  '&:focus': {
    outline: 'none', // Remove outline on click focus
  },
  '&:focus-visible': {
    outline: '2px auto currentColor', // Or use theme.palette.primary.main or another appropriate color
  },
  // Styles for SVG paths will be defined here or directly on paths
  '& path': {
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    transition: 'd 0.5s ease-in-out', // Changed to 3 seconds
    // We might need to add transform transitions later if we use SVG transforms
  },
}));

const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({ isActive, onClick, ...rest }) => {
  // Define path 'd' attributes based on isActive state
  // These will be applied directly to the path elements for now,
  // then we'll move to styled system for more complex animations.

  // Hamburger paths
  const topPathHamburger = "M3 7 L21 7";
  const middlePathHamburger = "M3 12 L21 12";
  const bottomPathHamburger = "M3 17 L21 17";

  // Corrected Arrow paths for <----
  const topPathArrow = "M9 7 L3 12";      // Top segment of '<'
  const middlePathArrow = "M3 12 L21 12";   // Shaft of the arrow
  const bottomPathArrow = "M9 17 L3 12";   // Bottom segment of '<'

  return (
    <StyledButton 
      isActive={isActive} 
      onClick={onClick} 
      aria-label={isActive ? 'close menu' : 'open menu'} 
      disableRipple
      {...rest}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="line-top" d={isActive ? topPathArrow : topPathHamburger} />
        <path className="line-middle" d={isActive ? middlePathArrow : middlePathHamburger} />
        <path className="line-bottom" d={isActive ? bottomPathArrow : bottomPathHamburger} />
      </svg>
    </StyledButton>
  );
};

export default AnimatedIconButton; 