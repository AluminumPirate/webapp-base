import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { LoadingIndicatorProps } from './types';

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ 
  message = 'Loading...',
  size = 40,
  fullScreen = false,
  color = 'primary'
}) => {
  const styles: React.CSSProperties = fullScreen
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: Semi-transparent overlay
        zIndex: 9999, // Ensure it's on top
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2, // Add some padding if not fullscreen
      };

  return (
    <Box sx={styles}>
      <CircularProgress size={size} color={color} />
      {message && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingIndicator; 