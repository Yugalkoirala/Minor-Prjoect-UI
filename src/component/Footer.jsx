import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0, // Ensure the footer starts from the very left
        right: 0, // Ensure the footer extends to the very right
        bottom: 0,
        width: '100%',
        background: '#5c5470',
        py: 1,
        zIndex: 999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '20px',
        paddingRight: '20px',
        boxSizing: 'border-box', // Include padding in the width calculation
      }}
    >
      <Typography variant="h5" sx={{ color: '#ffffff', mb: 1 }}>
        Let's Share Books!
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ color: '#ffffff', mr: 1 }}>
          Connect with us on social media:
        </Typography>
        <IconButton sx={{ color: '#ffffff', mx: 1 }} component="a" href="https://www.facebook.com">
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: '#ffffff', mx: 1 }} component="a" href="https://twitter.com">
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: '#ffffff', mx: 1 }} component="a" href="https://www.instagram.com">
          <Instagram />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ color: '#ffffff' }}>
        © {new Date().getFullYear()} Your Book Sharing Platform. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
