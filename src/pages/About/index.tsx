import React from 'react';
import { Typography, Container } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography>
        Welcome to the About page content.
      </Typography>
    </Container>
  );
};

export default About; 