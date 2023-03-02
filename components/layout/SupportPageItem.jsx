import { Grid, Link, styled, Typography } from "@mui/material";
import React from "react";
import { CustomLi } from "../inputs/CustomLi";

export const SupportPageItem = (props) => {
  const CustomTypography = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 600,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
      fontWeight: 500,
    },
  }));
  const CustomLink = styled(Link)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "14px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
      fontWeight: 500,
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    gap: "26px",
    [theme.breakpoints.between("xs", "md")]: {
      gap: "14px",
    },
  }));
  return (
    <CustomGrid container direction="column" xs={props.xs}>
      <CustomLi fontSize="16px">ورود حساب کاربری</CustomLi>
      <CustomTypography>چگونه در خانیما حساب کاربری بسازم؟</CustomTypography>
      <CustomTypography>چگونه اپلیکیشن دیوار را دانلود کنم؟</CustomTypography>
      <CustomTypography>
        آیا برای ثبت آگهی باید حساب کاربری بسازم؟
      </CustomTypography>
      <CustomTypography>چگونه وارد حساب خود شوم؟</CustomTypography>
      <CustomTypography>چگونه از حساب کاربری خود خارج شوم؟</CustomTypography>
      <CustomLink href="#" underline="none">
        موارد بیشتر
      </CustomLink>
    </CustomGrid>
  );
};

export const SupportPageItemFooter = (props) => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 700,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "12px",
    },
  }));
  const Description = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: 400,
    width: "302px",
    height: "auto",
    textAlign: "justify",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
      width: "100%",
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    gap: "26px",
    [theme.breakpoints.between("xs", "md")]: {
      gap: "10px",
    },
  }));
  const CustomLink = styled(Link)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "14px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "8px",
    },
  }));

  return (
    <CustomGrid container direction="column" xs={props.xs}>
      <Title>{props.title}</Title>
      <Description>{props.text}</Description>
      <CustomLink href="#" underline="none">
        {props.link}
      </CustomLink>
    </CustomGrid>
  );
};
