import React from 'react';
import { Container, Typography } from '@mui/material';
import { PageHeader } from '../../components';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Dashboard" subtitle="Overview of key metrics" />

      <Typography sx={{ mt: 2 }} color="text.secondary">
        (Dashboard content, charts, and real stats will go here)
      </Typography>
      
    </Container>
  );
};

export default Dashboard; 