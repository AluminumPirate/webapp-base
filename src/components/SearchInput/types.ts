import { TextFieldProps } from '@mui/material/TextField';

// Extend TextFieldProps, but make 'onChange' required for controlled component
export interface SearchInputProps 
  extends Omit<TextFieldProps, 'onChange' | 'value'> 
{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void; // Optional clear handler
} 