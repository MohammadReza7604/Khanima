import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  SupportPageItem,
  SupportPageItemFooter,
} from "../layout/SupportPageItem";
import { SupportMobile } from "./mobile/SupportMobile";

export const Support = () => {
  const CustomTextField = styled(TextField)({
    width: "400px",
    height: "40px",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#00A693",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });
  const CustomGrid = styled(Grid)(({ theme }) => ({
    marginTop: "100px",
    direction: "column",
    gap: "50px",
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
      background: "url(/images/back-mobile.png)",
    },
  }));
  const Wrapper = styled(Grid)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    [theme.breakpoints.between("xs", "md")]: {
      background: "url(/images/back-mobile.png)",
    },
  }));
  const CustomText = styled(Typography)({
    fontSize: "16px",
    fontWeight: 700,
  });
  return (
    <Wrapper container>
      <SupportMobile />
      <CustomGrid container>
        <Grid container gap="40px" direction="column" alignItems="center">
          <Typography
            variant="h1"
            fontSize="26px"
            fontWeight={700}
            textAlign="center"
          >
            پشتیبانی
          </Typography>
          <CustomTextField
            size="medium"
            variant="outlined"
            // onChange={handleChange}
            placeholder="جستجو در مقالات راهنما"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SupportPageItem xs={3.5} />
          <SupportPageItem xs={3.5} />
          <Grid
            xs={3.5}
            container
            justifyContent="center"
            textAlign="center"
            gap="20px"
            borderRadius="10px"
            bgcolor="#00A693"
            width="246px"
            height="222px"
            padding="34px 36px"
            direction="column"
          >
            <CustomText variant="subtitle1">
              پشتیبانی:&nbsp;&nbsp;&nbsp;&nbsp; 09:00 - 19:00
            </CustomText>
            <CustomText variant="subtitle1">021-1589958</CustomText>
            <CustomText>
              تلگرام: Khanima
              <br /> ایتا: Khanima
            </CustomText>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SupportPageItem xs={3.5} />
          <SupportPageItem xs={3.5} />
          <SupportPageItem xs={3.5} />
        </Grid>
        <Divider sx={{ width: "100%", borderColor: "white" }} />
        <Grid container direction="row" justifyContent="space-between">
          <SupportPageItemFooter
            xs={3.5}
            title="شرایط و قوانین کلی استفاده از خانیما"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
            link="مشاهده شرایط و قوانین"
          />
          <SupportPageItemFooter
            xs={3.5}
            title="راهنمای خرید امن"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
            link="راهنمای خرید امن"
          />
          <SupportPageItemFooter
            xs={3.5}
            title="انتقادات و پیشنهادات"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
            link="ثبت انتقاد و پیشنهاد"
          />
        </Grid>
      </CustomGrid>
    </Wrapper>
  );
};
