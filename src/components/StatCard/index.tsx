import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { StatCardProps } from './types';

const StatCard: React.FC<StatCardProps> = ({ 
  title,
  value,
  icon,
  color = 'text.primary' // Default color
}) => {
  return (
    <Card sx={{ minWidth: 200 }}> {/* Ensure a minimum width */}
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          {icon && (
            <Box sx={{ mr: 1.5, color: color, display: 'flex', alignItems: 'center', fontSize: '2rem' /* Adjust size */ }}> 
              {icon} 
            </Box>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" component="p" sx={{ color: color, textAlign: 'center' }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard; 