import React from "react";
import { Button, Divider, Grid, styled, Typography } from "@mui/material";
import { IconTitleGlobal } from "../../data-display/IconTitle";
import Image from "next/image";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { WeblogSingletBoxCarousel, WeblogSingletBoxMobileCarousel } from "../../layout/MainPageCarousel";
import { WeblogBoxCarouselMobile } from "../../layout/mobile/MainPageCarouselMobile";

export const WeblogSingleMobile = () => {
  const Line = styled(Divider)(({ theme }) => ({
    borderWidth: "1px",
    borderColor: "white",
    opacity: "0.5",
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: 700,
    color: "white",
  }));
  return (
    <CustomGrid container direction="column" gap="40px">
      <Title variant="h1">
        مهمترین خواص انگشتر عقیق و انگشتر فیروزه که نمی‌دانستید
      </Title>
      <Grid container direction="row" gap="40px">
        <IconTitleGlobal
          title="دانستنی، وبلاگ"
          icon={
            <Image
              width={12}
              height={12}
              alt="vector"
              src="/images/widgets.svg"
            />
          }
        />
        <IconTitleGlobal
          title="1400/05/23"
          icon={
            <Image width={12} height={12} alt="vector" src="/images/date.svg" />
          }
        />
        <IconTitleGlobal
          title="2535"
          icon={
            <VisibilityOutlinedIcon
              sx={{ color: "#FFC700", width: "14px", height: "14px" }}
            />
          }
        />
      </Grid>
      <Grid container direction="column" gap="20px">
        <Image
          width={368}
          height={184}
          alt="picture"
          src="/images/pic.png"
          style={{ borderRadius: "5px" }}
        />
        <Grid
          container
          direction="row"
          maxWidth="900px"
          justifyContent="space-between"
        >
          <Button
            variant="text"
            startIcon={
              <ShareRoundedIcon sx={{ width: "9px", height: "9px" }} />
            }
            sx={{ width: "100px", color: "white", fontSize: "10px" }}
          >
            اشتراک‌گذاری
          </Button>
          <Button
            variant="text"
            endIcon={
              <ArrowBackIosNewRoundedIcon
                sx={{ width: "9px", height: "9px" }}
              />
            }
            sx={{
              width: "180px",
              color: "white",
              fontSize: "9px",
              fontWeight: 600,
            }}
          >
            افسانه پیدایش تسبیح
          </Button>
        </Grid>
        <Line />
        <Typography variant="h4" fontSize="10px" fontWeight={600} color="white">
          آخرین مطالب وبلاگ
        </Typography>
        <Grid
          container
          direction="row"
          bgcolor="white"
          borderRadius="5px"
          width="100%"
          height="auto"
          paddingLeft="8px"
          justifyContent="center"
          alignItems="center"
        >
          <Grid container direction="column" xs={7}>
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
          </Grid>
          <Grid container direction="column" xs={5}>
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
            <IconTitleGlobal
              style={{ fontSize: "10px", fontWeight: 500, color: "black" }}
              title="معروفترین تابلوهای نقاشی جهان"
              icon={
                <Image
                  width={4}
                  height={4}
                  alt="shape"
                  src="/images/shape.png"
                />
              }
            />
          </Grid>
        </Grid>
        <Button
          variant="text"
          endIcon={
            <ArrowBackIosNewRoundedIcon sx={{ width: "9px", height: "9px" }} />
          }
          sx={{
            color: "white",
            fontSize: "9px",
            fontWeight: 600,
            alignSelf: "flex-end",
          }}
        >
          ادامه مطالب وبلاگ
        </Button>
        <Line />
      </Grid>
      <Typography fontSize="10px" fontWeight={700}>
        مطالب مرتبط
      </Typography>
      <Grid
        container
        width="100vw"
        alignItems="center"
        gap="40px"
        direction="column"
      >
        <WeblogBoxCarouselMobile />
      </Grid>
    </CustomGrid>
  );
};
