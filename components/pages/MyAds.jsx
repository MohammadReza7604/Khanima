import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { MyAdsBox } from "../surfaces/MyAdsBox";

export const MyAds = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    gap: "30px",
    [theme.breakpoints.between("xs", "md")]: {
      background: "url(/images/back-mobile.png)",
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    marginTop: "100px",
    alignItems: "center",
    gap: "50px",
    [theme.breakpoints.between("xs", "md")]: {
      alignItems: "flex-start",
      padding: " 0 10px",
      marginTop: "80px",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 700,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "14px",
    },
  }));
  return (
    <Wrapper
      container
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "30px 0 40px 0",
        gap: "30px",
      }}
    >
      <CustomGrid container direction="column">
        <Title variant="h1">آگهی‌های من</Title>
        <MyAdsBox />
        <MyAdsBox />
        <MyAdsBox />
        <MyAdsBox />
      </CustomGrid>
    </Wrapper>
  );
};
