import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';


const Progress = () => {
  return(
    <Box sx = {{
        height:"100vh",
        width:"100vw",
        display : "flex",
        justifyContent : "center",
        alignItems:"center",
        }}
    >
        <CircularProgress />
    </Box>
    );
};

export default Progress;

// const StyledBox = Styled(Box)`
//     position : absolute;
//     top:45%;
//     left:45%;
//     transform: translate(0,-50%);
//     padding: 10px;
// `

