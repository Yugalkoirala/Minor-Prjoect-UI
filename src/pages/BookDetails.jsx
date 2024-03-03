import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { $axios } from '../lib/axios';
import Progress from '../component/Progress';

const BookDetail = () => {
  const params = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["book-detail", params.bookId],
    queryFn: async () => {
      return await $axios.get(`/books/details/${params.bookId}`);
    },
  });

  const bookDetails = data?.data;

  if (isLoading) {
    return <Progress />;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">{bookDetails.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Author: {bookDetails.author}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Description: {bookDetails.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Genre: {bookDetails.genre}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Pages: {bookDetails.pages}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Add to Exchange
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetail;
