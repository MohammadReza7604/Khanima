import React from "react";
import { Grid } from "@mui/material";
import { CustomBox } from "../layout/CustomBox";
import { CarouselGroupMainPageBox } from "../surfaces/CarouselGroupMainPageBox";
import { MainPageGroupCarousel } from "../layout/MainPageCarousel";

export const GroupMain = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <CustomBox
        width="100%"
        height="354px"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "120px",
          gap: "44px",
        }}
      >
        <CarouselGroupMainPageBox />
        <MainPageGroupCarousel />
      </CustomBox>
      <CustomBox
        width="100%"
        height="354px"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "120px",
          gap: "44px",
        }}
      >
        <CarouselGroupMainPageBox />
        <MainPageGroupCarousel />
      </CustomBox>
    </Grid>
  );
};
