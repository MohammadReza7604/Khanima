import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { IconTitleGlobal } from "../data-display/IconTitle";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Image from "next/image";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import {
  ExpertBoxCarousel,
  WeblogSingletBoxCarousel,
} from "../layout/MainPageCarousel";

export const WeblogSingle = () => {
  return (
    <Grid
      container
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Grid container direction="row" marginTop="100px">
        <Grid container direction="column" gap="40px">
          <Typography variant="h1" fontSize="24px" fontWeight={700}>
            مهمترین خواص انگشتر عقیق و انگشتر فیروزه که نمی‌دانستید
          </Typography>
          <Grid container direction="row" gap="40px">
            <IconTitleGlobal
              title="دانستنی، وبلاگ"
              icon={
                <Image
                  width={16}
                  height={16}
                  alt="vector"
                  src="/images/widgets.svg"
                />
              }
            />
            <IconTitleGlobal
              title="1400/05/23"
              icon={
                <Image
                  width={16}
                  height={16}
                  alt="vector"
                  src="/images/date.svg"
                />
              }
            />
            <IconTitleGlobal
              title="2535"
              icon={
                <VisibilityOutlinedIcon
                  sx={{ color: "#FFC700", width: "18px", height: "18px" }}
                />
              }
            />
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Image
              width={900}
              height={418}
              alt="picture"
              src="/images/pic.png"
              style={{ borderRadius: "15px" }}
            />
            <Grid
              container
              bgcolor="white"
              borderRadius="10px"
              width="296px"
              height="376px"
              padding="15px 24px"
              justifyContent="center"
            >
              <Typography
                variant="h4"
                height="fit-content"
                fontSize="16px"
                fontWeight={600}
                color="black"
              >
                آخرین مطالب وبلاگ
              </Typography>
              <Divider
                sx={{
                  border: "1 solid #282828",
                  width: "210px",
                  height: "fit-content",
                }}
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
              <IconTitleGlobal
                style={{ fontSize: "14px", fontWeight: 600, color: "black" }}
                title="معروفترین تابلوهای نقاشی جهان"
                icon={
                  <Image
                    width={12}
                    height={12}
                    alt="shape"
                    src="/images/shape.png"
                  />
                }
              />
            </Grid>
          </Grid>
          <Typography
            sx={{
              width: "896px",
              height: "332px",
              textAlign: "justify",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "230%",
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
            <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <Grid
            container
            direction="row"
            maxWidth="900px"
            justifyContent="space-between"
          >
            <Button
              variant="text"
              startIcon={<ShareRoundedIcon />}
              sx={{ width: "100px", color: "white", fontSize: "16px" }}
            >
              اشتراک‌گذاری
            </Button>
            <Button
              variant="text"
              endIcon={<ArrowBackIosNewRoundedIcon />}
              sx={{
                width: "180px",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              افسانه پیدایش تسبیح
            </Button>
          </Grid>
          <Typography
            fontSize="26px"
            fontWeight={700}
            textAlign="center"
            width="1440px"
          >
            مطالب مرتبط
          </Typography>
          <Grid
            container
            width="100vw"
            alignItems="center"
            gap="40px"
            direction="column"
          >
            <WeblogSingletBoxCarousel />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
