import { Box } from "@mui/material";
import React from "react";

export const CustomBox = (props) => {
  return (
    <Box
      width={props.width}
      height={props.height}
      sx={{
        border: "3px solid #00A693",
        borderRadius: "10px",
        padding: "14px",
      }}
    >
      {props.children}
    </Box>
  );
};
