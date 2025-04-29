import { AvatarProps } from '@mui/material/Avatar';

export interface UserAvatarProps extends Omit<AvatarProps, 'src' | 'alt'> {
  src?: string | null; // Optional image source
  name: string; // Required name (for alt text and initials fallback)
  // size?: number // Could add custom size prop if needed
} 