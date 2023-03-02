import { Grid, Link, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AppBarBanner } from "../surfaces/AppBarBanner";
import { VectorBox } from "../surfaces/VectorBox";
import { CustomBox } from "../layout/CustomBox";
import {
  ExpertBoxCarousel,
  MainPageAdCarousel,
  MainPageCarousel,
  MainPageShopCarousel,
  WeblogBoxCarousel,
} from "../layout/MainPageCarousel";
import { ButtonMenu } from "../inputs/ButtonMenu";
import { MainPageMobile } from "./mobile/MainPageMobile";

export const MainPage = () => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    [theme.breakpoints.between("xs", "md")]:{
      display:"none"
    }
  }));
  const CustomImage = styled(Image)({
    borderRadius: "10px",
  });
  return (
    <>
      <AppBarBanner />
      <MainPageMobile/>
      <CustomGrid container>
        <Grid container direction="column" gap="64px" width="1440px">
          <Grid container direction="row" justifyContent="space-between">
            <CustomImage
              width={406}
              height={114}
              alt="banner"
              src="/images/pic-1.png"
            />
            <CustomImage
              width={406}
              height={114}
              alt="banner"
              src="/images/pic-2.png"
            />
            <CustomImage
              width={406}
              height={114}
              alt="banner"
              src="/images/pic-3.png"
            />
          </Grid>
          <Grid container>
            <VectorBox />
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            <Typography
              variant="h1"
              fontSize="24px"
              fontWeight={700}
              position="absolute"
              top="-14px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
            >
              آگهی
            </Typography>
            <CustomBox width="100%" height="370px">
              <MainPageAdCarousel />
            </CustomBox>
            <Link
              variant="h1"
              fontSize="14px"
              fontWeight={700}
              position="absolute"
              bottom="-4px"
              right="60px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
              underline="none"
              color="white"
              href="#"
            >
              مشاهده بیشتر
            </Link>
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            <Typography
              variant="h1"
              fontSize="24px"
              fontWeight={700}
              position="absolute"
              top="-14px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
            >
              حجره‌ها
            </Typography>
            <CustomBox width="100%" height="370px">
              <MainPageShopCarousel />
            </CustomBox>
            <Link
              variant="h1"
              fontSize="14px"
              fontWeight={700}
              position="absolute"
              bottom="-4px"
              right="60px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
              underline="none"
              color="white"
              href="#"
            >
              مشاهده بیشتر
            </Link>
          </Grid>
          <Typography
            fontSize="26px"
            fontWeight={700}
            textAlign="center"
            width="1440px"
          >
            کارشناس ها
          </Typography>
          <Grid
            container
            width="100vw"
            alignItems="center"
            gap="40px"
            direction="column"
          >
            <ExpertBoxCarousel />
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            <Typography
              variant="h1"
              fontSize="24px"
              fontWeight={700}
              position="absolute"
              top="-14px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
            >
              مزایده
            </Typography>
            <CustomBox width="100%" height="370px">
              <MainPageCarousel />
            </CustomBox>
            <Link
              variant="h1"
              fontSize="14px"
              fontWeight={700}
              position="absolute"
              bottom="-4px"
              right="60px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
              underline="none"
              color="white"
              href="#"
            >
              مشاهده بیشتر
            </Link>
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            <Typography
              variant="h1"
              fontSize="24px"
              fontWeight={700}
              position="absolute"
              top="-14px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
            >
              درخواست
            </Typography>
            <CustomBox width="100%" height="370px">
              <MainPageAdCarousel />
            </CustomBox>
            <Link
              variant="h1"
              fontSize="14px"
              fontWeight={700}
              position="absolute"
              bottom="-4px"
              right="60px"
              zIndex={2}
              padding="0 20px"
              backgroundColor="#282828"
              underline="none"
              color="white"
              href="#"
            >
              مشاهده بیشتر
            </Link>
          </Grid>
          <Typography
            fontSize="26px"
            fontWeight={700}
            textAlign="center"
            width="1440px"
          >
            کلکسیونر ها
          </Typography>
          <Grid
            container
            width="100vw"
            alignItems="center"
            gap="40px"
            direction="column"
          >
            <ExpertBoxCarousel />
          </Grid>
          <Typography
            fontSize="26px"
            fontWeight={700}
            textAlign="center"
            width="1440px"
          >
            وبلاگ
          </Typography>
          <Grid
            container
            width="100vw"
            alignItems="center"
            gap="40px"
            direction="column"
          >
            <WeblogBoxCarousel />
          </Grid>
        </Grid>
      </CustomGrid>
    </>
  );
};
