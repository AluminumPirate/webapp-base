import React from 'react';
import {
  Typography,
  Container,
  Paper,
} from '@mui/material';
import {
  PageHeader,
} from '../../components';

const About: React.FC = () => {
  return (
    <Container>
      <PageHeader title="About" subtitle="Information about this application" />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Application Version
        </Typography>
        <Typography paragraph>
          1.0.0 (Placeholder)
        </Typography>

        <Typography variant="h6" gutterBottom>
          Description
        </Typography>
        <Typography paragraph>
          This application provides a dashboard interface built with React, TypeScript, Vite, and Material UI.
          It connects to a backend API (details not included here).
        </Typography>

        <Typography variant="h6" gutterBottom>
          Credits
        </Typography>
        <Typography paragraph>
          Developed by [Your Name/Team Name Here].
        </Typography>
      </Paper>
    </Container>
  );
};

export default About; 