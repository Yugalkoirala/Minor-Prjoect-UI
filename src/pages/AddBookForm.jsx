import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Button, TextField, Typography } from "@mui/material";
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { $axios } from "../lib/axios";

const bookGenres = [
  "Fiction",
  "Non-fiction",
  "Science fiction",
  "Mystery",
  "Fantasy",
  "Romance",
  "Thriller",
  "Horror",
  "Biography",
  "Self-help",
  "Historical fiction",
  "Poetry",
  "Drama",
  "Comedy",
  "Adventure",
  "Crime",
  "Young adult",
  "Children's",
  "Memoir",
  "Travel",
  "Cooking",
  "Art",
  "Science",
  "Technology",
  "Business",
  "Philosophy",
  "Religion",
  "Politics",
  "History",
  "Sports",
  "Health",
  "Education",
  "Finance",
  "Literary fiction",
  "Humor",
  "Graphic novel",
  "Anthology",
  "Short stories",
  "Classic",
  "Other"
];


const AddBookForm=()=>{
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
const {mutate, isLoading, error, isError} = useMutation({
  mutationKey:["register-user"],
  mutationFn:async(values)=>{
    return await $axios.post("/book/add",values);
  },
  onSuccess:()=>{
    navigate("/books");
  },
});

  return (
    <>
console.log(error.response.data);
      <Formik
      initialValues={{
        title: '',
        author: '',
        genre: '',
        publicationYear: 0,
        condition: '',
        description: '',
        // image: null,
      }}

      validationSchema={Yup.object({
        title:Yup.string()
          .required("Title is required.")
          .trim()
          .max(255,"Title must be at most 255 characters.")
          .min(2,"Title must be at least 2 characters."),
        author:Yup.string()
          .required("Author is required.")
          .trim()
          .max(100,"Author must be at most 100 characters.")
          .min(2,"Author must be at least 2 characters."),
        genre:Yup.string()
          .required("Genre is required.")
          .oneOf(bookGenres),
        publicationYear:Yup.number()
          .required("Publication Year is required.")
          .min(1000,"Publication Year must be greater than or equal to 1000.")
          .max(new Date().getFullYear(),"Publication Year cannot be in the future."),
        condition:Yup.string()
          .required("Condition is required.")
          .oneOf(['New', 'Like New', 'Very Good', 'Good', 'Acceptable']),
        description:Yup.string()
          .required("Description is required.")
          .trim()
          .min(200,"Description must be at least 200 characters")
          .max(1000,"Description must be at most 1000 characters")
      })}
      onSubmit={async (values) => {
        console.log(values);
        mutate(values);
      }}
    >
      {formik => (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            marginTop:"10rem",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"1rem",
            padding:"2rem",
            boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            width:"30vw",
          }}
        >

          <Typography variant="h6">Add Book</Typography>

          {/* <FormControl fullWidth sx={{ mt: 2 }}>
  <Button variant="contained" component="label">
    Upload Image
    <input
      type="file"
      hidden
      onChange={(event) => {
        formik.setFieldValue("image", event.currentTarget.files[0]);
      }}
    />
  </Button>
  {formik.touched.image && formik.errors.image && (
    <Typography color="error" sx={{ mt: 1 }}>
      {formik.errors.image}
    </Typography>
  )}
</FormControl> */}

<FormControl fullWidth>
            <TextField
              variant="filled"
              label="Image"
              {...formik.getFieldProps("image")}
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="error-message">{formik.errors.image}</div>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField
              variant="filled"
              label="Title"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="error-message">{formik.errors.title}</div>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextField
              variant="filled"
              label="Author"
              {...formik.getFieldProps("author")}
            />
            {formik.touched.author && formik.errors.author ? (
              <div className="error-message">{formik.errors.author}</div>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              variant="filled"
              {...formik.getFieldProps("genre")}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              {bookGenres.map((item, index) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
              ))}
            </Select>
            {formik.touched.genre && formik.errors.genre ? (
              <div className="error-message">{formik.errors.genre}</div>
            ) : null}
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Publication Year</InputLabel>
            <FilledInput
              {...formik.getFieldProps("publicationYear")}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
            {formik.touched.publicationYear && formik.errors.publicationYear ? (
              <div className="error-message">{formik.errors.publicationYear}</div>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Condition</InputLabel>
            <Select
              variant="filled"
              {...formik.getFieldProps("condition")}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              {['New', 'Like New', 'Very Good', 'Good', 'Acceptable'].map((item, index) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
              ))}
            </Select>
            {formik.touched.condition && formik.errors.condition ? (
              <div className="error-message">{formik.errors.condition}</div>
            ) : null}
          </FormControl>

          <FormControl fullWidth>
            <TextareaAutosize
              className="product-description"
              placeholder="Description here..."
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="error-message">{formik.errors.description}</div>
            ) : null}
          </FormControl>

          <Button type="submit" variant='contained' fullWidth>
            Add Book
          </Button>
        </form>
      )}
    </Formik>
    </>
  );
};

export default AddBookForm;
