import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalWrapperProps } from './types';

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = 'sm', // Default max width
  fullWidth = true, // Default to full width within max width
  ...restDialogProps
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      aria-labelledby="modal-wrapper-title"
      {...restDialogProps}
    >
      <DialogTitle 
        id="modal-wrapper-title"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {title}
        <IconButton 
          aria-label="close"
          onClick={onClose} 
          sx={{ 
            // position: 'absolute',
            // right: 8,
            // top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent dividers={false}> {/* Control dividers via padding/margins if needed */}
        {children}
      </DialogContent>
      {actions && (
        <>
          <Divider />
          <DialogActions>
            {actions}
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ModalWrapper; 