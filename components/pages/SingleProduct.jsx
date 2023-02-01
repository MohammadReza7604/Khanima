import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Divider,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { CustomBox } from "../layout/CustomBox";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ReportIcon from "@mui/icons-material/Report";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductImagesSlider from "../product-images-slider/ProductImagesSlider";
import Image from "next/image";
import {
  MainPageAdCarousel,
  MainPageShopCarousel,
} from "../layout/MainPageCarousel";

export const SingleProduct = () => {
  const CustomTypo = styled(Typography)({
    fontSize: "18px",
    fontWeight: 700,
  });
  const Text = styled(Typography)({
    fontSize: "14px",
    fontWeight: 400,
    color: "#282828",
    "&:hover": {
      color: "black",
    },
  });
  const CustomButton = styled(Button)({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  });
  const TitleTypography = styled(Typography)({
    fontSize: "14px",
    fontWeight: 700,
    color: "#00A693",
  });
  const BoxTypography = styled(Typography)({
    fontSize: "12px",
    fontWeight: 600,
    color: "white",
    textAlign: "justify",
    lineHeight: "188%",
  });

  return (
    <Grid
      container
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Grid container direction="column" marginTop="100px" gap="100px">
        <Grid container direction="row">
          <Grid container direction="row" gap="26px" xs={6}>
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              خانه {">"} لوازم موسیقی
            </Typography>
            <Grid container direction="row" gap="10">
              <Grid container xs={9}>
                <CustomBox width="385px" height="100px">
                  <Grid container direction="column" gap="10px">
                    <Typography
                      variant="h1"
                      sx={{ fontSize: "24px", fontWeight: 700 }}
                    >
                      گرامافون قدیمی 150 ساله
                    </Typography>
                    <Grid container justifyContent="space-between">
                      <CustomTypo>قیمت:</CustomTypo>
                      <CustomTypo>1،500،000 تومان</CustomTypo>
                    </Grid>
                  </Grid>
                </CustomBox>
              </Grid>
              <Grid container gap="15px" xs={3}>
                <Grid container direction="row">
                  <LocationOnOutlinedIcon />
                  <Typography>تهران، ستارخان</Typography>
                </Grid>
                <Grid container direction="row">
                  <DateRangeOutlinedIcon />
                  <Typography>4 ماه قبل</Typography>
                </Grid>
                <Grid container direction="row">
                  <MusicNoteOutlinedIcon />
                  <Typography>لوازم موسیقی</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              width="335px"
              height="62px"
              margin="0 auto"
              justifyContent="center"
            >
              <ButtonGroup variant="contained">
                <CustomButton>
                  <CallIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>تماس</Text>
                </CustomButton>
                <CustomButton>
                  <ChatBubbleOutlinedIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>چت</Text>
                </CustomButton>
                <CustomButton>
                  <ReportIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>گزارش</Text>
                </CustomButton>
                <CustomButton>
                  <BookmarkIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>ذخیره</Text>
                </CustomButton>
                <CustomButton>
                  <ShareIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>اشتراک</Text>
                </CustomButton>
              </ButtonGroup>
            </Grid>
            <Grid container gap="10px">
              <TitleTypography variant="h2">مشخصات:</TitleTypography>
              <CustomBox width="670px" height="110px">
                <Grid container direction="row">
                  <Grid container xs={7} gap="8px">
                    <Grid container direction="row" gap="3px">
                      <BoxTypography>قدمت محصول: </BoxTypography>
                      <BoxTypography>
                        ................................
                      </BoxTypography>
                      <BoxTypography>500 سال</BoxTypography>
                    </Grid>
                    <Grid container direction="row" gap="3px">
                      <BoxTypography>قدمت محصول: </BoxTypography>
                      <BoxTypography>
                        ................................
                      </BoxTypography>
                      <BoxTypography>500 سال</BoxTypography>
                    </Grid>
                    <Grid container direction="row" gap="3px">
                      <BoxTypography>قدمت محصول: </BoxTypography>
                      <BoxTypography>
                        ................................
                      </BoxTypography>
                      <BoxTypography>500 سال</BoxTypography>
                    </Grid>
                  </Grid>
                  <Grid container xs={5} gap="8px">
                    <Grid container direction="row" gap="3px">
                      <BoxTypography>قدمت محصول: </BoxTypography>
                      <BoxTypography>
                        ................................
                      </BoxTypography>
                      <BoxTypography>500 سال</BoxTypography>
                    </Grid>
                    <Grid container direction="row" gap="3px">
                      <BoxTypography>قدمت محصول: </BoxTypography>
                      <BoxTypography>
                        ................................
                      </BoxTypography>
                      <BoxTypography>500 سال</BoxTypography>
                    </Grid>
                    <Grid container direction="row" gap="3px">
                      <BoxTypography>قدمت محصول: </BoxTypography>
                      <BoxTypography>
                        ................................
                      </BoxTypography>
                      <BoxTypography>500 سال</BoxTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </CustomBox>
            </Grid>
            <Grid container gap="10px">
              <TitleTypography>توضیحات:</TitleTypography>
              <Box width="670px">
                <BoxTypography>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی.
                </BoxTypography>
              </Box>
              <Grid container justifyContent="center">
                <Button endIcon={<KeyboardArrowDownIcon />}>
                  مشاهده بیشتر
                </Button>
              </Grid>
              <Grid
                container
                width="445px"
                height="130px"
                borderRadius="10px"
                bgcolor="white"
                margin="0 auto"
                padding="16px 26px"
                gap="10px"
              >
                <Grid container direction="row">
                  <Grid
                    container
                    direction="row"
                    gap="8px"
                    alignItems="center"
                    xs={8}
                  >
                    <Avatar alt="profile" src="/images/profile.png" />
                    <Typography
                      fontSize="16px"
                      fontWeight={400}
                      color="#282828"
                    >
                      فروشگاه یاسری
                    </Typography>
                  </Grid>
                  <Button variant="contained" xs={4}>
                    اطلاعات تماس
                  </Button>
                </Grid>
                <Grid container justifyContent="center">
                  <ButtonBase>اجناس دیگر این فروشگاه</ButtonBase>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={6} height="100px">
            <ProductImagesSlider />
            <Image width={645} height={144} alt="map" src="/images/map.png" />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" gap="40px">
          <Typography variant="h1" fontSize="24px" fontWeight={700}>
            آگهی های مشابه
          </Typography>
          <Grid
            container
            bgcolor="white"
            borderRadius="15px"
            padding="24px 18px"
          >
            <MainPageAdCarousel />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" gap="40px">
          <Typography variant="h1" fontSize="24px" fontWeight={700}>
            آگهی های این فروشنده
          </Typography>
          <Grid
            container
            bgcolor="white"
            borderRadius="15px"
            padding="24px 18px"
          >
            <MainPageAdCarousel />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
