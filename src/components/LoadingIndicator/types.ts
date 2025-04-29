import { CircularProgressProps } from '@mui/material/CircularProgress';

export interface LoadingIndicatorProps {
  message?: string;
  size?: number;
  fullScreen?: boolean; // Option to make it cover the screen
  color?: CircularProgressProps['color']; // Allow standard CircularProgress colors
} 