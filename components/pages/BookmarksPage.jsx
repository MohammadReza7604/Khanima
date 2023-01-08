import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { BoxItemsCarousel } from "../layout/BoxItemesCarousel";

export const BookmarksPage = () => {
  return (
    <Box
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Grid
        container
        margin="100px 0 0 0"
        direction="column"
        textAlign="center"
        gap="35px"
      >
        <Typography variant="h1" fontSize="24px" fontWeight={700}>
          نشان شده‌ها
        </Typography>
        <Grid
          container
          width="100%"
          flexWrap="wrap"
          gap="45px"
          justifyContent="center"
        >
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
          <BoxItemsCarousel />
        </Grid>
      </Grid>
    </Box>
  );
};
