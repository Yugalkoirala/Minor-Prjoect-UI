import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { $axios } from "../lib/axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {mutate, isLoading, error, isError} = useMutation({
    mutationKey:["login"],
    mutationFn:async(values)=>await $axios.post("/user/login", values),
    onSuccess:(res)=>{
      localStorage.setItem("accesstoken",res?.data?.token);
      localStorage.setItem("firstName",res?.data?.user?.firstName);
      localStorage.setItem("userRole",res?.data?.user?.role);
      navigate("/home");
    },
  });

  return (
    <>
      {isLoading && <Typography>Logging in...</Typography>}
      {isError && (
        <Typography sx={{color:"Red"}}>
          {error.response.data.message}
        </Typography>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
            .trim(),
          password: Yup.string()
            .required("Password is required"),
        })}
        onSubmit={async (values) => {
          mutate(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <TextField
              label="Email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">
                {formik.errors.email}
              </div>
            ) : null}

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">
                {formik.errors.password}
              </div>
            ) : null}

            <Button type="submit" variant="contained" color="success">
              Sign in
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
