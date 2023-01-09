import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const IconTitle = (props) => {
  return (
    <Grid container direction="row" gap="5px" justifyContent="flex-end">
      <Typography sx={{ direction: "rtl" }}>{props.title}</Typography>
      <Box>{props.icon}</Box>
    </Grid>
  );
};
