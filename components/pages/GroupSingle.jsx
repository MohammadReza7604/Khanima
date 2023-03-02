import { Box, Button, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomBox } from "../layout/CustomBox";
import { GroupSingleBox } from "../surfaces/GroupSingleBox";
import { GroupSingleMobile } from "./mobile/GroupSingleMobile";

export const GroupSingle = () => {
  const CustomButton = styled(Button)({
    width: "150px",
    height: "36px",
    color: "black",
    fontSize: "16px",
    fontWeight: 700,
  });
  const CustomGrid = styled(Grid)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    gap: "26px",
    [theme.breakpoints.between('xs','md')]:{
      display:"none"
    }
  }));
  return (
    <>
      <GroupSingleMobile />
      <CustomGrid container>
        <Grid
          container
          marginTop="100px"
          direction="column"
          alignItems="center"
          gap="34px"
        >
          <Grid container direction="row" gap="40px">
            <Grid container direction="column" gap="20px" xs={2}>
              <Image
                width={230}
                height={220}
                alt="pic-group"
                src="/images/pic-box.png"
              />
              <CustomButton variant="contained">درج کالا</CustomButton>
            </Grid>
            <Grid container direction="column" gap="36px" xs={9.5}>
              <Grid container direction="row" justifyContent="space-between">
                <Grid container direction="row" gap="20px" xs={6}>
                  <Typography variant="h1" fontSize="24px" fontWeight={700}>
                    گروه اطلس
                  </Typography>
                  <CustomButton variant="contained">اطلاعات مدیر</CustomButton>
                </Grid>
                <Box xs={6}>
                  <CustomButton variant="contained">تنظیمات گروه</CustomButton>
                </Box>
              </Grid>
              <Grid container>
                <Typography
                  variant="caption"
                  fontSize="16px"
                  fontWeight={600}
                  textAlign="justify"
                  lineHeight="234%"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی. بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی. بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <CustomBox
            width="100%"
            height="auto"
            style={{
              padding: "32px 50px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Grid
              container
              bgcolor="white"
              borderRadius="5px"
              width="100%"
              height="68px"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h3"
                fontSize="22px"
                fontWeight={600}
                color="black"
              >
                پیام مدیر - Pin Message
              </Typography>
            </Grid>
            <Grid container flexWrap="wrap" gap="40px" justifyContent="center">
              <GroupSingleBox />
              <GroupSingleBox />
              <GroupSingleBox />
              <GroupSingleBox />
              <GroupSingleBox />
              <GroupSingleBox />
              <GroupSingleBox />
              <GroupSingleBox />
            </Grid>
          </CustomBox>
        </Grid>
      </CustomGrid>
    </>
  );
};
