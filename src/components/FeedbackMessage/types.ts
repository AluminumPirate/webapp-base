import { AlertColor } from '@mui/material/Alert';
import { SnackbarOrigin } from '@mui/material/Snackbar';

export interface FeedbackMessageProps {
  open: boolean;
  severity: AlertColor; // 'error', 'warning', 'info', 'success'
  title?: string;
  message: string;
  onClose?: () => void; // Optional callback when closed (if closable)
  autoHideDuration?: number | null; // Duration in ms, null means no auto-hide
  position?: SnackbarOrigin; // e.g., { vertical: 'top', horizontal: 'center' }
} 