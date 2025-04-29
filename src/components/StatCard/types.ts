import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactElement<SvgIconComponent>; // Optional MUI icon element
  color?: string; // Optional color for icon/value
} 