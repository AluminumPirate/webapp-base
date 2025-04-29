import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { EmptyStateProps } from './types';

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionButton,
}) => {
  return (
    <Paper 
      variant="outlined" 
      sx={{ 
        textAlign: 'center', 
        p: 4, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200, // Ensure it takes some space
        borderColor: 'divider',
      }}
    >
      {icon && (
        <Box sx={{ mb: 2, fontSize: '3rem', color: 'text.secondary' }}>
          {icon}
        </Box>
      )}
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}
      {actionButton && (
        <Box>
          {actionButton}
        </Box>
      )}
    </Paper>
  );
};

export default EmptyState; 