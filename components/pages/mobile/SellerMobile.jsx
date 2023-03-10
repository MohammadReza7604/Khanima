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
                ?????????????? ????????????????
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
              <StatisticsNumber title="??????????" number="10" xs={3} />
              <StatisticsNumber title="?????????? ??????????" number="124" xs={4} />
              <StatisticsNumber title="?????????? ??????" number="234" xs={3} />
            </Grid>
            <Typography
              fontSize="10px"
              fontWeight={500}
              textAlign="justify"
              lineHeight="220%"
            >
              ???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ???????? ?? ????
              ?????????????? ???? ???????????? ???????????? ???????? ?????????????? ?? ???????? ???????? ?????????????? ?? ????????
              ???? ???????? ?? ?????????????????? ???? ???????? ??????.
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
            ?????????? ????
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
            ???????? ??????
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
                <CustomTab label="??????????" />
                <CustomTab label="??????????????" />
                <CustomTab label="??????????" />
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
                    ???????????? ??????????????
                  </Typography>
                  <Typography
                    variant="caption"
                    textAlign="justify"
                    lineHeight="222%"
                    fontSize="10px"
                    fontWeight={500}
                  >
                    ???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ???????? ??
                    ???? ?????????????? ???? ???????????? ???????????? ???????? ?????????????? ?? ???????? ???????? ??????????????
                    ?? ???????? ???? ???????? ?? ?????????????????? ???? ???????? ??????
                  </Typography>
                </Grid>
                <Grid container direction="column" gap="5px">
                  <Typography
                    variant="caption"
                    fontSize="12px"
                    fontWeight={700}
                  >
                    ???????????? ??????????????
                  </Typography>
                  <Grid container justifyContent="space-between">
                    <CustomButton size="small" variant="contained">
                      ???????? ??????????
                    </CustomButton>
                    <CustomButton size="small" variant="contained">
                      ???????? ??????????
                    </CustomButton>
                    <CustomButton size="small" variant="contained">
                      ???????? ??????????
                    </CustomButton>
                  </Grid>
                </Grid>
                <Grid container direction="column" gap="20px">
                  <Typography fontSize="10px" fontWeight={700}>
                    ????????: ???????????? ?????????? ???????????????? ???????????? ???????? ???????? ?? ????????
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
                      ????????????????
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
                      ????????????????
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
                      ????????????????
                    </Button>
                  </Box>
                </Grid>
                <Grid container gap="20px">
                  <CommentBoxMobile
                    src="/images/app-bar-banner-pic.jpg"
                    username="?????????? ?????????? ????????"
                    time="?????? ?????????? ??????"
                    commentText="???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ???????? ?? ???? ?????????????? ???? ???????????? ???????????? ??????"
                  />
                  <CommentBoxMobile
                    src="/images/app-bar-banner-pic.jpg"
                    username="?????????? ?????????? ????????"
                    time="?????? ?????????? ??????"
                    commentText="???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ???????? ?? ???? ?????????????? ???? ???????????? ???????????? ??????"
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
