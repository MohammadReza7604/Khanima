import React from "react";
import {
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
} from "../../layout/SupportPageItem";

export const SupportMobile = () => {
  const CustomTextField = styled(TextField)({
    width: "200px",
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
      input: {
        "&::placeholder": {
          fontSize: "10px",
        },
      },
    },
  });
  const CustomText = styled(Typography)({
    fontSize: "10px",
    fontWeight: 700,
  });
  const Line = styled(Divider)({
    borderWidth: "0.5px",
    borderColor: "white",
  });
  const Wrapper = styled(Grid)(({ theme }) => ({
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  return (
    <Wrapper container direction="column">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        padding="0 20px"
        gap="40px"
      >
        <Typography fontSize="14px" fontWeight={700} color="#00A693">
          پشتیبانی
        </Typography>
        <CustomTextField
          size="small"
          variant="outlined"
          // onChange={handleChange}
          placeholder="جستجو در مقالات راهنما"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
        <Grid container direction="column" gap="20px">
          <SupportPageItem />
          <Line />
          <SupportPageItem />
          <Line />
          <SupportPageItem />
          <Line />
          <SupportPageItem />
          <Line />
        </Grid>
        <Grid container direction="column" gap="20px">
          <SupportPageItemFooter
            title="شرایط و قوانین کلی استفاده از خانیما"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
            link="مشاهده شرایط و قوانین"
          />
          <SupportPageItemFooter
            title="راهنمای خرید امن"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
            link="راهنمای خرید امن"
          />
          <SupportPageItemFooter
            title="انتقادات و پیشنهادات"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
"
            link="ثبت انتقاد و پیشنهاد"
          />
          <Line />
        </Grid>
        <Grid
            container
            justifyContent="space-between"
            textAlign="center"
            borderRadius="4px"
            bgcolor="#00A693"
            width="356px"
            height="50px"
            padding="14px 20px"
            direction="row"
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
    </Wrapper>
  );
};
