import { Grid, styled, Typography } from "@mui/material";
import React from "react";

export const StatisticsNumber = (props) => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 700,
    color: "#00A693",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
      letterSpacing:"0"
    },
  }));
  const Number = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 700,
    marginLeft: "10px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
    },
  }));
  return (
    <Grid container direction="column" xs={props.xs}>
      <Title variant="caption">{props.title}</Title>
      <Number variant="caption" sx={{}}>
        {props.number}
      </Number>
    </Grid>
  );
};
