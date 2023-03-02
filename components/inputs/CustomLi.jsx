import { Box, styled, Typography } from "@mui/material";
import React from "react";

export const CustomLi = (props) => {
  const Text = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: props.fontSize,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "12px",
    },
  }));
  const CustomBox = styled(Typography)(({ theme }) => ({
    listStyleImage: "url(/images/circle.png)",
    margin: "0",
    [theme.breakpoints.between("xs", "md")]: {
      listStyleImage: "url(/images/circle-mobile.png)",
    },
  }));
  return (
    <CustomBox component="ul">
      <Text component="li">{props.children}</Text>
    </CustomBox>
  );
};
