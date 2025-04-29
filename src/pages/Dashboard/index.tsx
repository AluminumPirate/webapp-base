import React from 'react';
import { Typography, Container } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard Page
      </Typography>
      <Typography>
        Welcome to the Dashboard page content.
      </Typography>
    </Container>
  );
};

export default Dashboard; 