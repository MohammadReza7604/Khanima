import { Box, Stack } from "@mui/material";
import React from "react";
import { HeaderNavbar } from "../surfaces/HeaderNavbar";
import { AppBarBanner } from "../surfaces/AppBarBanner";
import { ModelListCardAdsPage } from "../surfaces/ModelListCardAdsPage";
import { AdsPage } from "./AdsPage";

export const MainPage = () => {
  return (
    <>
      <Stack direction="column">
        <Box>
          <HeaderNavbar />
        </Box>
        <Box sx={{ marginTop: "72px" }}>
          <AppBarBanner />
        </Box>
        <Box>
          <AdsPage />
        </Box>
      </Stack>
    </>
  );
};