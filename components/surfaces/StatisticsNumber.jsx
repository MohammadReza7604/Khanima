import { Grid, Typography } from "@mui/material";
import React from "react";

export const StatisticsNumber = (props) => {
  return (
    <Grid container direction="column" xs={props.xs}>
      <Typography
        variant="caption"
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#00A693",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontSize: "18px", fontWeight: 700, marginLeft: "10px" }}
      >
        {props.number}
      </Typography>
    </Grid>
  );
};
