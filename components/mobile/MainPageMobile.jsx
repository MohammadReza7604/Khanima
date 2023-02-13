import { Grid, Link, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomBox } from "../layout/CustomBox";
import { WeblogBoxCarouselMobile } from "../layout/mobile/MainPageCarouselMobile";
import { CardGoodsItems } from "../surfaces/mobile/CardGoodsItems";
import { ItemCard } from "../surfaces/mobile/ItemCard";
import { VectorBoxMobile } from "../surfaces/VectorBox";

export const MainPageMobile = () => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    background: "url(/images/back-mobile.png)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const CustomGridWarper = styled(Grid)(({ theme }) => ({
    maxWidth: "390px",
    margin: "0 auto",
    marginTop: "100px",
    padding: "30px",
    gap: "24px",
    [theme.breakpoints.only("xs")]: {
      // padding: "50px",
    },
  }));
  return (
    <CustomGrid container>
      <CustomGridWarper container direction="column">
        <Image
          width={354}
          height={74}
          alt="pic-mobile"
          src="/images/pic-mobile.png"
          style={{ borderRadius: "8px" }}
        />
        <VectorBoxMobile />
        <ItemCard />
        <CardGoodsItems />
      <Typography
        fontSize="14px"
        fontWeight={700}
        textAlign="center"
        width="1440px"
      >
        وبلاگ
      </Typography>
      <Grid
        container
        width="100vw"
        alignItems="flex-start"
        gap="40px"
        direction="column"
      >
        <WeblogBoxCarouselMobile />
      </Grid>
      </CustomGridWarper>
    </CustomGrid>
  );
};
