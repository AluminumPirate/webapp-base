import React from 'react';
import { Avatar } from '@mui/material';
import { UserAvatarProps } from './types';
import { getInitials } from './logic';

// Helper function to generate a color based on string hash (simple version)
// Ensures same name gets same fallback color
function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  name,
  sx,
  ...restAvatarProps
}) => {

  const commonProps = {
    alt: name,
    ...restAvatarProps
  };

  if (src) {
    // If image source exists, use it
    return <Avatar src={src} sx={sx} {...commonProps} />;
  } else {
    // Otherwise, calculate initials and background color
    return (
      <Avatar 
        sx={{ 
          bgcolor: stringToColor(name),
          ...sx, // Apply sx prop from user *after* bgcolor
        }}
        {...commonProps}
      >
        {getInitials(name)}
      </Avatar>
    );
  }
};

export default UserAvatar; 