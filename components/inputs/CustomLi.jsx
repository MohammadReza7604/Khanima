import { Box, Typography } from "@mui/material";
import React from "react";

export const CustomLi = (props) => {
  return (
    <Box
      component="ul"
      sx={{ listStyleImage: "url(/images/circle.png)", margin: "0" }}
    >
      <Typography
        component="li"
        fontSize={props.fontSize}
        sx={{
          fontWeight: 700,
        }}
      >
        {props.children}
      </Typography>
    </Box>
  );
};
