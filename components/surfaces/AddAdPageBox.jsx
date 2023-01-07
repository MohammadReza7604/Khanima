import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const AddAdPageBox = (props) => {
  return (
    <Grid
      container
      width="235px"
      height="115px"
      bgcolor="#00A693"
      borderRadius="15px"
      border="5px solid #00A693"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" fontSize="24px" fontWeight={500}>
        {props.text}
      </Typography>
    </Grid>
  );
};
