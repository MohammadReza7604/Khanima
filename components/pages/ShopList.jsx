import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { BoxItemsShopCarousel } from "../layout/‌BoxItemesShopCarousel";
import { AppBarBanner } from "../surfaces/AppBarBanner";

export const ShopList = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid>
      <Box sx={{ marginTop: "72px" }}>
        <AppBarBanner />
      </Box>
      <Grid
        container
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "30px 0 40px 0",
          gap: "30px",
        }}
      >
        <Grid container padding="10px 0 10px 90px">
          <FormControl sx={{ width: "264px", height: "40px" }}>
            <InputLabel id="ad-type">دسته‌بندی</InputLabel>
            <Select
              labelId="ad-type"
              id="ad-type"
              value={value}
              label="دسته‌بندی"
              onChange={handleChange}
              sx={{
                border: "1px solid white",
                "& .MuiSelect-icon": {
                  color: "#00A693",
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container direction="column" gap="45px" justifyContent="center">
          <Grid
            container
            width="100%"
            flexWrap="wrap"
            gap="46px"
            justifyContent="center"
          >
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
            <BoxItemsShopCarousel />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
