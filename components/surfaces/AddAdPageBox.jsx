import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";

export const AddAdPageBox = (props) => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    width: "235px",
    height: "115px",
    backgroundColor: "#00A693",
    borderRadius: "15px",
    border: "5px solid #00A693",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "md")]: {
      width: "140px",
      height: "80px",
      borderRadius: "10px",
    },
  }));
  const Text = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 500,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "18px",
    },
  }));
  return (
    <CustomGrid container>
      <Text variant="h4">{props.text}</Text>
    </CustomGrid>
  );
};
