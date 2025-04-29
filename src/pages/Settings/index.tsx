import React from 'react';
import { Typography, Container } from '@mui/material';

const Settings: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Settings Page
      </Typography>
      <Typography>
        Welcome to the Settings page content.
      </Typography>
    </Container>
  );
};

export default Settings; 