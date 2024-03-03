import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookCard = (props) => {
  const navigate = useNavigate();
  const book = props.item;

  const goToBookDetail = () => {
    navigate(`/books/details/${book._id}`);
  };

  return (
    <Card>
      <CardMedia
        onClick={goToBookDetail}
        component="img"
        alt={book.title}
        height="300"
        src={book.coverImageUrl || "https://via.placeholder.com/300"}
        title={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {book.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Condition: {book.condition}
        </Typography>
        <Button variant="contained" onClick={goToBookDetail}>
          Explore
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
