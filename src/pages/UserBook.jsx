import React from 'react';
import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserBookList from './UserBookList';

const UserBook = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx ={{
        marginTop: "3rem",
        padding: "3rem",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center" marginBottom="3rem">
        <Grid item>
          <a href="YOUR_RECOMMENDATION_SYSTEM_LINK" target="_blank" rel="noopener noreferrer">
            <Button variant="contained">
              Go to Recommendation System
            </Button>
          </a>
        </Grid>
        <Grid item>
          {/* Empty grid item */}
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => navigate("/books/add")}>
            Add Book
          </Button>
        </Grid>
      </Grid>
      <UserBookList />
    </Box>
  );
};

export default UserBook;
