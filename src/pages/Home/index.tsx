import React from 'react';
import { Container, Card, CardContent, CardHeader, Box, Typography } from '@mui/material';
import { PageHeader } from '../../components';

const Home: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Home" subtitle="Welcome to your application dashboard" />

      <Card sx={{ maxWidth: 600 }}>
        <CardHeader title="Getting Started" />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            This is the main landing page of your application.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Navigate using the sidebar on the left to explore different sections like Dashboard, Settings, and About.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption">
              Feel free to customize this page.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home; 