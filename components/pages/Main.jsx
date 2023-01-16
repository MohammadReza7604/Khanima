import { Box, Stack } from "@mui/material";
import React from "react";
import { HeaderNavbar } from "../surfaces/HeaderNavbar";
import { AppBarBanner } from "../surfaces/AppBarBanner";
import { ModelListCardAdsPage } from "../surfaces/ModelListCardAdsPage";
import { AdsPage } from "./AdsPage";
import { SingleProductPage } from "./SingleProductPage";
import { AddAdPage } from "./AddAdPage";
import { AddAdAnotherVersionPage } from "./AddAdAnotherVersionPage";
import { ShopListPage } from "./ShopListPage";
import { MyAdsPage } from "./MyAdsPage";
import { SellerPage } from "./SellerPage";
import { ExpertSinglePage } from "./ExpertSinglePage";
import { SellerTermsPage } from "./SellerTermsPage";
import { SuggestPage } from "./SuggestPage";
import { TermsConditions } from "./TermsConditions";
import { ChatPage } from "./ChatPage";
import { AboutUs } from "./AboutUs";
import { SupportPage } from "./SupportPage";
import { AddFriendsPage } from "./AddFriendsPage";
import { AddSellerPage } from "./AddSellerPage";
import { MainPage } from "./MainPage";

export const Main = () => {
  return (
    <>
      <Stack direction="column">
        <Box>
          <HeaderNavbar />
        </Box>
        <Box>
          <MainPage />
        </Box>
      </Stack>
    </>
  );
};
