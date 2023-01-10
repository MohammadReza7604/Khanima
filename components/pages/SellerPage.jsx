import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import { FaUserCheck } from "react-icons/fa";
import ReportIcon from "@mui/icons-material/Report";
import ShareIcon from "@mui/icons-material/Share";
import { StatisticsNumber } from "../surfaces/StatisticsNumber";
import { CustomBox } from "../layout/CustomBox";
import { BoxItemsCarousel } from "../layout/BoxItemesCarousel";
import { IconTitle } from "../data-display/IconTitle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { TabPanel } from "../navigation/TabPanel";
import AddIcon from "@mui/icons-material/Add";
import { CommentBox } from "../surfaces/CommentBox";

export const SellerPage = () => {
  const Text = styled(Typography)({
    fontSize: "14px",
    fontWeight: 700,
    color: "#282828",
  });
  const CustomGrid = styled(Grid)({
    margin: "0 16px",
    textAlign: "center",
  });
  const CustomDivider = styled(Divider)({
    border: "0.50px solid white",
  });
  const CustomTab = styled(Tab)({
    color: "white",
    marginRight: "10px",

    "&:hover": {
      color: "black",
      backgroundColor: "#00A693",
      borderRadius: "5px",
    },
    "&.Mui-selected": {
      color: "black",
      backgroundColor: "#00A693",
      borderRadius: "5px",
      border: "0",
    },
    "&.Mui-focusVisible": {
      border: "0",
    },
  });
  const CustomButton = styled(Button)({
    backgroundColor: "white",
    color: "#282828",
    "&:hover": {
      backgroundColor: "#282828",
      color: "white",
    },
  });
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "30px 0 40px 0",
        gap: "26px",
      }}
    >
      <Grid container marginTop="100px">
        <Grid container xs={2} justifyContent="flex-start" gap="18px">
          <Grid container>
            <Image
              width={240}
              height={200}
              alt="seller-photo"
              src="/images/giay01.jpg"
              style={{ borderRadius: "15px" }}
            />
          </Grid>
          <Grid
            container
            width="auto"
            height="60px"
            borderRadius="5px"
            bgcolor="#00A693"
            padding="5px"
            direction="row"
            justifyContent="center"
          >
            <CustomGrid>
              <FaUserCheck
                style={{ color: "#FFFFFF", width: "16x", height: "16x" }}
              />
              <Text>دنبال کردن</Text>
            </CustomGrid>
            <CustomDivider />
            <CustomGrid>
              <ChatBubbleOutlinedIcon
                sx={{ color: "#FFFFFF", width: "16x", height: "16x" }}
              />
              <Text>چت</Text>
            </CustomGrid>
            <CustomDivider />
            <CustomGrid>
              <CallIcon
                sx={{ color: "#FFFFFF", width: "16x", height: "16x" }}
              />
              <Text>تماس</Text>
            </CustomGrid>
          </Grid>
        </Grid>
        <Grid container xs={4} paddingLeft="50px">
          <Grid>
            <Typography variant="h1" fontSize="24px" fontWeight={700}>
              فروشگاه ظفرخوانی
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid container gap="5px" xs={6}>
              <ReportIcon sx={{ color: "white" }} />
              <ShareIcon sx={{ color: "white" }} />
            </Grid>
            <Box xs={6}>
              <Typography fontSize="14px" fontWeight={700}>
                @Zafarshop
              </Typography>
            </Box>
          </Grid>
          <Grid container direction="row">
            <StatisticsNumber title="اجناس" number="10" xs={4} />
            <StatisticsNumber title="دنبال کننده" number="124" xs={4} />
            <StatisticsNumber title="دنبال شده" number="234" xs={4} />
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Box height="270px">
            <Typography textAlign="justify" lineHeight="282%">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی. بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی. بیشتری را برای طراحان رایانه ای
              علی الخصوص طراحان خلاقی.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <CustomBox width="100%" height="auto">
          <Grid container justifyContent="center" direction="column">
            <Grid>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  indicatorColor={""}
                >
                  <CustomTab label="اجناس" />
                  <CustomTab label="اطلاعات" />
                  <CustomTab label="نظرات" />
                </Tabs>
              </Box>
            </Grid>
            <TabPanel value={value} index={0}>
              <Grid
                container
                width="100%"
                flexWrap="wrap"
                gap="45px"
                justifyContent="center"
              >
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
                <BoxItemsCarousel />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container gap="90px">
                <Grid container direction="row" gap="20px">
                  <Box display="flex" alignItems="center" xs={1}>
                    <Typography
                      variant="caption"
                      fontSize="22px"
                      fontWeight={600}
                    >
                      درباره فروشگاه
                    </Typography>
                  </Box>
                  <Box height="108px" width="1170px" xs={11}>
                    <Typography
                      variant="caption"
                      textAlign="justify"
                      lineHeight="222%"
                      fontSize="14px"
                      fontWeight={400}
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی. بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی. بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی.
                    </Typography>
                  </Box>
                </Grid>
                <Grid container direction="row">
                  <Grid container direction="column" gap="40px" xs={3}>
                    <Grid>
                      <Typography variant="h2" fontSize="22px" fontWeight={600}>
                        حوزه تخصصی فعالیت
                      </Typography>
                    </Grid>
                    <Grid container gap="10px">
                      <CustomButton variant="contained">
                        فروش عتیقه
                      </CustomButton>
                      <CustomButton variant="contained">
                        فروش عتیقه
                      </CustomButton>
                      <CustomButton variant="contained">
                        فروش عتیقه
                      </CustomButton>
                    </Grid>
                    <Grid>
                      <Typography fontSize="14px" fontWeight={600}>
                        آدرس: تهران، بلوار ستارخان، خیابان نهم، کوچه ی کسری
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={2}>
                    <IconTitle
                      title="0922 056 2339"
                      icon={<LocalPhoneIcon sx={{ color: "#00A693" }} />}
                    />
                    <IconTitle
                      title="026 - 34605896"
                      icon={<LocalPhoneIcon sx={{ color: "#00A693" }} />}
                    />
                    <IconTitle
                      title="Khanima"
                      icon={<InstagramIcon sx={{ color: "#00A693" }} />}
                    />
                    <IconTitle
                      title="Khanima"
                      icon={<TelegramIcon sx={{ color: "#00A693" }} />}
                    />
                  </Grid>
                  <Grid container xs={7} justifyContent="center">
                    <Box
                      width="618px"
                      height="164px"
                      border="5px solid #FFFFFF"
                      borderRadius="10px"
                    >
                      <Image
                        width={610}
                        height={160}
                        src="/images/location.png"
                        alt="location"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container gap="50px" width="995px" margin="0 auto">
                <Grid container justifyContent="space-between">
                  <FormControl sx={{ width: "264px", height: "40px" }}>
                    <InputLabel id="ad-type">دسته‌بندی</InputLabel>
                    <Select
                      labelId="ad-type"
                      id="ad-type"
                      // value={value}
                      label="دسته‌بندی"
                      onChange={handleChange}
                      sx={{
                        border: "1px solid white",
                        "& .MuiSelect-icon": {
                          color: "#00A695",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<AddIcon sx={{ color: "white" }} />}
                  >
                    ثبت نظر
                  </Button>
                </Grid>
                <Grid
                  container
                  sx={{ gap: "24" }}
                  direction="column"
                  alignItems="center"
                >
                  <CommentBox
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، "
                  />
                  <CommentBox
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، "
                  />
                  <CommentBox
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، "
                  />
                  <CommentBox
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، "
                  />
                  <CommentBox
                    src="/images/app-bar-banner-pic.jpg"
                    username="مرتضی شیرین زاده"
                    time="پنج دقیقه پیش"
                    commentText="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، "
                  />
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </CustomBox>
      </Grid>
    </Grid>
  );
};
