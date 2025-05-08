import React from 'react';
import { IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface AnimatedIconButtonProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  // Allow passing other IconButton props like color, aria-label etc.
  [x: string]: any; 
}

const lineCommonStyles = {
  position: 'absolute',
  left: 0,
  height: '2px',
  // width: '100%', // Removed to allow individual width control
  backgroundColor: 'currentColor',
  borderRadius: '1px',
  transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, bottom 0.3s ease-in-out, opacity 0.3s ease-in-out, width 0.3s ease-in-out',
};

const StyledButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isActive', // Prevent isActive from reaching the DOM element
})<{
  isActive: boolean;
}>(({ theme, isActive }) => ({
  width: '24px', // Size of the icon area
  height: '24px',
  position: 'relative',
  padding: 0, // Remove default IconButton padding
  '&:focus': {
    outline: 'none', // Remove outline on click focus
  },
  '&:focus-visible': {
    outline: '2px auto currentColor', // Or use theme.palette.primary.main or another appropriate color
    // For a ring effect similar to MUI's default, you might use a box-shadow:
    // boxShadow: `0 0 0 2px ${theme.palette.primary.main}`, 
  },
  '& .line-middle': {
    ...lineCommonStyles,
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 1, // Always visible
    width: isActive ? '100%' : '100%', // Stays full width, or adjust if needed e.g., '80%' for active
  },
  '& .line-top': {
    ...lineCommonStyles,
    top: isActive ? '50%' : 'calc(50% - 6px)',
    width: isActive ? '50%' : '100%',
    transformOrigin: isActive ? '0 50%' : undefined, // Rotate around left edge when active
    transform: isActive ? 'translateY(-50%) rotate(45deg)' : 'none', // Upper part of < (/)
    opacity: 1, // Always visible
  },
  '& .line-bottom': {
    ...lineCommonStyles,
    top: isActive ? '50%' : 'calc(50% + 4px)',
    width: isActive ? '50%' : '100%',
    transformOrigin: isActive ? '0 50%' : undefined, // Rotate around left edge when active
    transform: isActive ? 'translateY(-50%) rotate(-45deg)' : 'none', // Lower part of < (\)
    opacity: 1, // Always visible
  },
}));

const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({ isActive, onClick, ...rest }) => {
  return (
    <StyledButton 
      isActive={isActive} 
      onClick={onClick} 
      aria-label={isActive ? 'close menu' : 'open menu'} 
      disableRipple
      {...rest}
    >
      {/* Use Box elements for lines instead of pseudo-elements for easier styling via sx/styled */}
      <Box component="span" className="line-top" />
      <Box component="span" className="line-middle" />
      <Box component="span" className="line-bottom" />
    </StyledButton>
  );
};

export default AnimatedIconButton; 