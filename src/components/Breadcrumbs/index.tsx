import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { BreadcrumbsProps } from './types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MuiBreadcrumbs 
      separator={<NavigateNextIcon fontSize="small" />} 
      aria-label="breadcrumb" 
      sx={{ mb: 2 }} // Add margin below
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const content = (
          <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
            {item.icon && <Box component="span" sx={{ mr: 0.5, display: 'inherit' }}>{item.icon}</Box>}
            {item.label}
          </Box>
        );

        if (isLast || !item.link) {
          // Last item or item without a link
          return (
            <Typography key={index} color="text.primary" sx={{ display: 'flex', alignItems: 'center' }}>
              {content}
            </Typography>
          );
        } else {
          // Clickable item with a link
          return (
            <MuiLink 
              key={index} 
              component={RouterLink} 
              to={item.link} 
              underline="hover" 
              color="inherit" 
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {content}
            </MuiLink>
          );
        }
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs; 