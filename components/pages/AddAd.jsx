import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { BackPageMobile } from "../layout/mobile/BackPageMobile";
import { AddAdPageBox } from "../surfaces/AddAdPageBox";

export const AddAd = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "999px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    [theme.breakpoints.between("xs", "md")]: {
      background: "url(/images/back-mobile.png)",
      height:"100vh",
    },
  }));
  const CustomGridTitle = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    margin: "113px 0",
    [theme.breakpoints.between("xs", "md")]: {
      margin: "50px 0",
    },
  }));
  return (
    <CustomBox>
      <CustomGrid container>
        <BackPageMobile title="ثبت آگهی" />
        <CustomGridTitle>
          <Typography variant="h2" fontSize="28px" fontWeight={700}>
            ثبت آگهی
          </Typography>
        </CustomGridTitle>
        <Grid>
          <Grid
            container
            width="100%"
            flexWrap="wrap"
            gap="20px"
            justifyContent="center"
          >
            <AddAdPageBox text={"آگهی فروش"} />
            <AddAdPageBox text={"حجره دار"} />
            <AddAdPageBox text={"کارشناس"} />
            <AddAdPageBox text={"مزایده"} />
            <AddAdPageBox text={"درخواست"} />
            <AddAdPageBox text={"کلکسیونر"} />
          </Grid>
        </Grid>
      </CustomGrid>
    </CustomBox>
  );
};
