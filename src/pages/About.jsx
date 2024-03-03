import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { FaBookOpen } from 'react-icons/fa';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Welcome to the Community Book Exchange Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Our platform is dedicated to fostering a vibrant community of book lovers who share their passion for reading
          and exchanging knowledge.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're an avid reader or just starting your literary journey, you'll find a welcoming community
          eager to share recommendations, exchange books, and engage in insightful discussions.
        </Typography>
        <Typography variant="body1" paragraph>
          With our platform, you can:
        </Typography>
        <Box mt={2}>
          <Typography variant="body1" component="span">
            <FaBookOpen style={{ marginRight: '8px' }} />
            Discover a diverse collection of books spanning various genres and topics.
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="body1" component="span">
            <FaBookOpen style={{ marginRight: '8px' }} />
            Connect with fellow book enthusiasts and build meaningful relationships.
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="body1" component="span">
            <FaBookOpen style={{ marginRight: '8px' }} />
            Share your thoughts, reviews, and recommendations with the community.
          </Typography>
        </Box>
        <Box mt={3}>
          <Button variant="contained" color="primary" size="large" href="/books">
            Explore Books
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
