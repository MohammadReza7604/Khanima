import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StatisticsNumber } from "../../surfaces/StatisticsNumber";
import Image from "next/image";
import ReportIcon from "@mui/icons-material/Report";
import ShareIcon from "@mui/icons-material/Share";
import { TabPanel } from "../../navigation/TabPanel";
import { BoxItemsCarouselMobile } from "../../layout/BoxItemesCarousel";
import { IconTitle } from "../../data-display/IconTitle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { CommentBoxMobile } from "../../surfaces/CommentBox";

export const SellerMobile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomButton = styled(Button)({
    fontSize: "10px",
    backgroundColor: "white",
    color: "#282828",
    "&:hover": {
      backgroundColor: "#282828",
      color: "white",
    },
  });

  const CustomTab = styled(Tab)({
    color: "white",
    fontSize: "12px",
    "&.Mui-selected": {
      fontSize: "14px",
    },
  });
  const Wrapper = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "auto",
    background: "url(/images/back-mobile.png)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  return (
    <Wrapper container>
      <Grid
        container
        marginTop="70px"
        gap="30px"
        direction="column"
        padding="5px 16px"
      >
        <IconButton sx={{ alignSelf: "flex-end" }}>
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
        <Grid container direction="row">
          <Grid container direction="column" gap="20px" xs={8}>
            <Grid container direction="row" justifyContent="space-between">
              <Typography variant="h1" fontSize="12px" fontWeight={700}>
                فروشگاه ظفرخوانی
              </Typography>
              <Typography fontSize="10px" fontWeight={700}>
                Zafarshop@
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              padding="0 14px"
            >
              <StatisticsNumber title="اجناس" number="10" xs={3} />
              <StatisticsNumber title="دنبال کننده" number="124" xs={4} />
              <StatisticsNumber title="دنبال شده" number="234" xs={3} />
            </Grid>
            <Typography
              fontSize="10px"
              fontWeight={500}
              textAlign="justify"
              lineHeight="220%"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            xs={4}
            alignItems="flex-end"
            gap="60px"
          >
            <Box height="20px">
              <Image
                width={76}
                height={52}
                alt="picture"
                src="/images/seller-page-photo.png"
                style={{ borderRadius: "5px" }}
              />
            </Box>
            <Grid container direction="row" gap="5px" justifyContent="flex-end">
              <ReportIcon sx={{ color: "white" }} />
              <ShareIcon sx={{ color: "white" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <Button
            variant="contained"
            sx={{
              width: "216px",
              fontSize: "10px",
              fontWeight: 700,
              height: "32px",
            }}
          >
            تعقیب کن
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100px",
              fontSize: "10px",
              fontWeight: 700,
              height: "32px",
              color: "black",
              backgroundColor: "white",
            }}
          >
            پیام بده
          </Button>
        </Grid>
        <Grid container>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-flexContainer": {
                    justifyContent: "space-between",
                  },
                  "& .MuiTabs-indicator": {
                    zIndex: "2",
                  },
                }}
              >
                <CustomTab label="اجناس" />
                <CustomTab label="اطلاعات" />
                <CustomTab label="نظرات" />
              </Tabs>
            </Box>
            <Divider
              sx={{
                borderColor: "white",
                position: "relative",
                top: "-1.5px",
                zIndex: "1",
              }}
            />
            <TabPanel value={value} index={0}>
              <Grid
                container
                width="100%"
                flexWrap="wrap"
                justifyContent="space-between"
                gap="16px"
              >
                <BoxItemsCarouselMobile />
                <BoxItemsCarouselMobile />
                <BoxItemsCarouselMobile />
                <BoxItemsCarouselMobile />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container direction="column" gap="20px">
                <Grid container width="100%" direction="column" gap="10px">
                  <Typography
                    variant="caption"
                    fontSize="12px"
                    fontWeight={700}
                  >
                    درباره فروشگاه
                  </Typography>
                  <Typography
                    variant="caption"
                    textAlign="justify"
                    lineHeight="222%"
                    fontSize="10px"
                    fontWeight={500}
                  >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </Typography>
                </Grid>
                <Grid container direction="column" gap="5px">
                  <Typography
                    variant="caption"
                    fontSize="12px"
                    fontWeight={700}
                  >
                    درباره فروشگاه
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <CustomButton size="small" variant="contained">
                      فروش عتیقه
                    </CustomButton>
                    <CustomButton size="small" variant="contained">
                      فروش عتیقه
                    </CustomButton>
                    <CustomButton size="small" variant="contained">
                      فروش عتیقه
                    </CustomButton>
                  </Grid>
                </Grid>
                <Grid container direction="column" gap="20px">
                  <Typography fontSize="10px" fontWeight={700}>
                    آدرس: تهران، بلوار ستارخان، خیابان نهم، کوچه ی کسری
                  </Typography>

                  <Image
                    width={360}
                    height={98}
                    src="/images/location.png"
                    alt="location"
                    style={{ borderRadius: "5px", border: "1px solid white" }}
                  />
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <IconTitle
                      dir="rtl"
                      title="0922 056 2339"
                      icon={
                        <LocalPhoneIcon
                          sx={{
                            color: "#00A693",
                            width: "8px",
                            height: "18px",
                          }}
                        />
                      }
                    />
                    <IconTitle
                      dir="rtl"
                      title="026 - 34605896"
                      icon={
                        <LocalPhoneIcon
                          sx={{
                            color: "#00A693",
                            width: "8px",
                            height: "18px",
                          }}
                        />
                      }
                    />
                    <IconTitle
                      dir="rtl"
                      title="Khanima"
                      icon={
                        <InstagramIcon
                          sx={{
                            color: "#00A693",
                            width: "8px",
                            height: "18px",
                          }}
                        />
                      }
                    />
                    <IconTitle
                      dir="rtl"
                      title="Khanima"
                      icon={
                        <TelegramIcon
                          sx={{
                            color: "#00A693",
                            width: "8px",
                            height: "18px",
                          }}
                        />
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container direction="column" gap="40px">
                <Grid container direction="row" justifyContent="space-between">
                  <Grid container direction="row" width="fit-content">
                    <Button
                      variant="text"
                      size="small"
                      endIcon={
                        <KeyboardArrowDownIcon
                          sx={{ width: "12px", height: "12" }}
                        />
                      }
                      sx={{ fontSize: "10px" }}
                    >
                      جدیدترین
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      endIcon={
                        <KeyboardArrowDownIcon
                          sx={{ width: "12px", height: "12" }}
                        />
                      }
                      sx={{ color: "white", fontSize: "10px" }}
                    >
                      مفیدترین
                    </Button>
                  </Grid>
                  <Box>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={
                        <AddIcon
                          sx={{ width: "12px", height: "12", color: "white" }}
                        />
                      }
                      sx={{ fontSize: "8px" }}
                    >
                      جدیدترین
                    </Button>
                  </Box>
                </Grid>
                <Grid container gap="20px">
                  <CommentBoxMobile
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
                  />
                  <CommentBoxMobile
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
