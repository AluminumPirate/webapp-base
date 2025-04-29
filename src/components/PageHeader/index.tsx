import React from 'react';
import { Typography, Box } from '@mui/material';
import { PageHeaderProps } from './types'; // Import from local types file

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 4 }}> {/* Add some margin below the header */}
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default PageHeader; 