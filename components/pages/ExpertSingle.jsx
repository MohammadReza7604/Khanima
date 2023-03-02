import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
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

import { TabPanel } from "../navigation/TabPanel";

export const ExpertSingle = () => {
  const Text = styled(Typography)({
    fontSize: "12px",
    fontWeight: 700,
    color: "#282828",
    "&:hover": {
      color: "black",
    },
  });
  const CustomButtonGroup = styled(Button)({
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  });
  const CustomGrid = styled(Grid)({
    margin: "0 16px",
    textAlign: "center",
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
              height={220}
              alt="seller-photo"
              src="/images/giay02.jpg"
              style={{ borderRadius: "15px" }}
            />
          </Grid>
          <Grid container width="240px" height="60px" justifyContent="center">
            <CustomGrid>
              <ButtonGroup variant="contained">
                <CustomButtonGroup>
                  <FaUserCheck
                    style={{ color: "#FFFFFF", width: "16x", height: "16x" }}
                  />
                  <Text>دنبال کردن</Text>
                </CustomButtonGroup>
                <CustomButtonGroup>
                  <ChatBubbleOutlinedIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>چت</Text>
                </CustomButtonGroup>
                <CustomButtonGroup>
                  <CallIcon
                    sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
                  />
                  <Text>تماس</Text>
                </CustomButtonGroup>
              </ButtonGroup>
            </CustomGrid>
          </Grid>
        </Grid>
        <Grid container xs={4} paddingLeft="50px">
          <Grid>
            <Typography variant="h1" fontSize="24px" fontWeight={700}>
              مرتضی شیرین زاده
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid container gap="5px" xs={6}>
              <ReportIcon sx={{ color: "white" }} />
              <ShareIcon sx={{ color: "white" }} />
            </Grid>
            <Box xs={6}>
              <Typography fontSize="14px" fontWeight={700} dir="ltr">
                @MortezaSh 
              </Typography>
            </Box>
          </Grid>
          <Grid container direction="row">
            <StatisticsNumber title="کالای کارشناسی شده" number="10" xs={6} />
            <StatisticsNumber title="افراد تایید شده" number="224" xs={6} />
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
          <Grid container justifyContent="center" direction="column" gap="10px">
            <Grid>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  indicatorColor={""}
                >
                  <CustomTab label="اطلاعات" />
                  <CustomTab label="نظرات" />
                  <CustomTab label="تخصص ها" />
                </Tabs>
              </Box>
            </Grid>
            <TabPanel value={value} index={0}>
              <Grid container height="204px">
                <Typography
                  variant="caption"
                  width="100%"
                  height="204px"
                  fontSize="14px"
                  fontWeight={700}
                  lineHeight="300%"
                  textAlign="justify"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی.
                  <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                  فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                  حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی.
                </Typography>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
          </Grid>
        </CustomBox>
      </Grid>
    </Grid>
  );
};
