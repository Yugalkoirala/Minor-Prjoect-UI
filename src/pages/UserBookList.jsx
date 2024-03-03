import React, { useState } from 'react';
import { Box, Pagination } from '@mui/material';
import { useQuery } from 'react-query';
import { $axios } from '../lib/axios';
import Progress from '../component/Progress';
import BookCard from '../component/BooksCard';

const UserBookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user-book-list", currentPage],
    queryFn: async () => {
      return await $axios.post("/book/all", {
        page: currentPage,
        limit: 9,
      });
    },
  });

  const bookList = data?.data?.books;
  const totalPage = data?.data?.totalPage;

  const handleChangePage = (_, value) => {
    setCurrentPage(value);
  };

  if (isLoading) {
    return <Progress />;
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2rem", padding: "2rem" }}>
        {bookList?.map((item) => (
          <BookCard key={item._id} item={item} />
        ))}
      </Box>
      <Pagination
        page={currentPage}
        count={totalPage}
        color="primary"
        size="large"
        sx={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
        onChange={handleChangePage}
      />
    </>
  );
};

export default UserBookList;
