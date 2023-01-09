import { Grid, Typography } from "@mui/material";
import React from "react";
import { ModelListCardAdsPage } from "../surfaces/ModelListCardAdsPage";
import { MyAdsBox } from "../surfaces/MyAdsBox";

export const MyAdsPage = () => {
  return (
    <Grid
      container
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "30px 0 40px 0",
        gap: "30px",
      }}
    >
      <Grid
        container
        marginTop="100px"
        justifyContent="center"
        direction="column"
        gap="50px"
      >
        <Typography variant="h1" fontSize="24px" fontWeight={700}>
          آگهی‌های من
        </Typography>
        <MyAdsBox />
        <MyAdsBox />
        <MyAdsBox />
        <MyAdsBox />
      </Grid>
    </Grid>
  );
};
