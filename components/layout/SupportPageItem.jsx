import { Grid, Link, styled, Typography } from "@mui/material";
import React from "react";
import { CustomLi } from "../inputs/CustomLi";

export const SupportPageItem = (props) => {
  const CustomTypography = styled(Typography)({
    fontSize: "14px",
    fontWeight: 600,
  });
  return (
    <Grid container direction="column" gap="26px" xs={props.xs}>
      <CustomLi fontSize="16px">ورود حساب کاربری</CustomLi>
      <CustomTypography>چگونه در خانیما حساب کاربری بسازم؟</CustomTypography>
      <CustomTypography>چگونه اپلیکیشن دیوار را دانلود کنم؟</CustomTypography>
      <CustomTypography>
        آیا برای ثبت آگهی باید حساب کاربری بسازم؟
      </CustomTypography>
      <CustomTypography>چگونه وارد حساب خود شوم؟</CustomTypography>
      <CustomTypography>چگونه از حساب کاربری خود خارج شوم؟</CustomTypography>
      <Link href="#" underline="none" fontWeight={700} fontSize="14px">
        موارد بیشتر
      </Link>
    </Grid>
  );
};
export const SupportPageItemFooter = (props) => {
  const CustomTypography = styled(Typography)({
    fontSize: "14px",
    fontWeight: 600,
  });
  return (
    <Grid container direction="column" gap="26px" xs={props.xs}>
      <Typography fontSize="16px" fontWeight={700}>
        {props.title}
      </Typography>
      <Typography
        fontSize="12px"
        fontWeight={400}
        width="302px"
        height="auto"
        textAlign="justify"
      >
        {props.text}
      </Typography>
      <Link href="#" underline="none" fontWeight={700} fontSize="14px">
        {props.link}
      </Link>
    </Grid>
  );
};
