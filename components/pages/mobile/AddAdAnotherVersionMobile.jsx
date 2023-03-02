import {
  Box,
  Button,
  FormControl,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AddAdCarousel } from "../../layout/MainPageCarousel";
import { BackPageMobile } from "../../layout/mobile/BackPageMobile";
import { PhotoAddBox } from "../../surfaces/PhotoAddBox";

export const AddAdAnotherVersionMobile = () => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    marginTop: "50px",
    // background: "url(/images/back-mobile.png)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const CustomTextField = styled(TextField)(({ theme }) => ({
    height: "26px",
    width: "320px",
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
      "& .MuiSelect-icon": {
        color: "white",
      },
    },
  }));
  const Title = styled(Typography)({
    color: "#00A693",
    fontSize: "12px",
    fontWeight: 700,
  });
  const Description = styled(Typography)({
    width: "322px",
    color: "white",
    fontSize: "12px",
    fontWeight: 300,
    textAlign: "justify",
    lineHeight:"170%"
  });
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <CustomGrid container direction="column">
      <Grid container direction="column" padding="30px 0 20px 20px" gap="50px" sx={{background:"url(/images/back-mobile.png)"}}>
        <BackPageMobile title="ثبت آگهی"/>
        <FormControl>
          <CustomTextField
            sx={{ width: "242px" }}
            id="outlined-select-currency"
            select
            variant="outlined"
            label="دسته‌بندی"
            // value={currency}
            onChange={handleChange}
          >
            {/* <CategoryMenuAppBar /> */}
          </CustomTextField>
        </FormControl>
        <CustomTextField id="ad-title" label="عنوان آگهی" variant="outlined" />
        <CustomTextField
          id="text-area"
          label="توضیحات"
          variant="outlined"
          multiline
          rows={4}
          maxRows={4}
          sx={{ marginBottom: "74px" }}
        />
        <CustomTextField
          id="location"
          label="موقعیت مکانی"
          variant="outlined"
        />
        <Grid container gap="12px">
          <Typography variant="h3" fontSize="12px" fontWeight={400}>
            عکس آگهی
          </Typography>
          <AddAdCarousel />
        </Grid>
        <Grid container direction="column">
              <Title>توضیحات:</Title>
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Description>
            </Grid>
            <Grid container direction="column">
              <Title>قوانین:</Title>
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Description>
            </Grid>
            <Button variant="contained" sx={{ width: "122px", height: "32px", alignSelf:"center" }}>
              ثبت آگهی
            </Button>
      </Grid>
      {/* <Grid container>
          <Grid container direction="column" gap="20px">
            <Box>
            </Box>
            <Grid container direction="row" gap="24px">
              <PhotoAddBox />
              <PhotoAddBox />
              <PhotoAddBox />
              <PhotoAddBox />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid container xs={6} direction="column">
              <Title>توضیحات:</Title>
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Description>
            </Grid>
            <Grid container xs={6} direction="column">
              <Title>قوانین:</Title>
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </Description>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Button variant="contained" sx={{ width: "172px", height: "50px" }}>
              ثبت آگهی
            </Button>
          </Grid>
        </Grid> */}
    </CustomGrid>
  );
};
