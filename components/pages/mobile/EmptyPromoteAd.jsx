import { Box, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BackPageMobile } from "../../layout/mobile/BackPageMobile";

export const EmptyPromoteAd = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    Width: "100%",
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  return (
    <>
      <Wrapper container position="relative" >
        <Grid container position="absolute" top="50px" padding="0 10px">
          <BackPageMobile style={{width:"100%",padding:"0"}} title="پرداخت‌های من" />
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="20px"
            padding="0 8px"
          >
            <Image
              width={96}
              height={96}
              alt="empty-icon"
              src="/images/empty-icon.svg"
            />
            <Typography fontSize="14px" fontWeight={500} color="white">
              هنوز هیچ پرداختی برای شما ثبت نشده است!
            </Typography>
            <Typography
              fontSize="12px"
              fontWeight={500}
              color="white"
              textAlign="center"
              lineHeight="16px"
            >
              در صورت خرید بسته‌های افزایش بازدید و یا خرید امن، پرداخت‌های شما
              اینجا نمایش داده خواهد شد.
            </Typography>
          </Grid>
      </Wrapper>
    </>
  );
};
