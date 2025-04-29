import React from 'react';
import { DialogProps } from '@mui/material/Dialog';

export interface ModalWrapperProps extends Omit<DialogProps, 'open' | 'onClose' | 'title'> {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode; // Content of the modal body
  actions?: React.ReactNode; // Optional footer actions/buttons
  // Add any other custom props, e.g., hideTitleDivider?: boolean
} 