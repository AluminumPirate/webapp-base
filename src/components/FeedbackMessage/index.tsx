import React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { FeedbackMessageProps } from './types';

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ 
  open,
  severity,
  title,
  message,
  onClose,
  autoHideDuration = 6000,
  position = { vertical: 'bottom', horizontal: 'left' }
}) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose?.();
  };

  return (
    <Snackbar 
      open={open} 
      autoHideDuration={autoHideDuration} 
      onClose={handleClose} 
      anchorOrigin={position}
    >
      <Alert 
        onClose={handleClose}
        severity={severity} 
        variant="filled"
        sx={{ width: '100%' }} 
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

export default FeedbackMessage; 