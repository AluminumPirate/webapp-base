import React from 'react';
import { Typography, Container, Card, CardContent, CardHeader, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Home Page
      </Typography>

      <Card sx={{ maxWidth: 600 }}>
        <CardHeader title="Welcome!" />
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