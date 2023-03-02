import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { PhotoAddBox } from "../surfaces/PhotoAddBox";
import { AddAdAnotherVersionMobile } from "./mobile/AddAdAnotherVersionMobile";

export const AddAdAnotherVersionPage = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
  }));
  const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: "28px",
    fontWeight: 700,
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
    },
  }));
  const CustomFormControl = styled(FormControl)(({ theme }) => ({
    width: "418px",
    height: "45px",
    [theme.breakpoints.between("xs", "md")]: {
      width: "242px",
      height: "26px",
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    direction:"row", margin:"100px 0",
    [theme.breakpoints.between("xs", "md")]: {
      display:"none"
    },
  }));
  const CustomTextField = styled(TextField)(({ theme }) => ({
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
    fontSize: "14px",
    fontWeight: 700,
  });
  const Description = styled(Typography)({
    width: "300px",
    color: "white",
    fontSize: "12px",
    fontWeight: 300,
    textAlign: "justify",
  });
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
    <AddAdAnotherVersionMobile/>
    <CustomBox>
      <Box margin="100px 0 0 0" textAlign="center">
        <HeaderTitle variant="h3">ثبت آگهی</HeaderTitle>
      </Box>
      <CustomGrid container >
        <Grid container direction="column" gap="40px" xs={6}>
          <CustomFormControl>
            <CustomTextField
              id="outlined-select-currency"
              select
              variant="outlined"
              label="دسته‌بندی"
              // value={currency}
              onChange={handleChange}
            >
              {/* <CategoryMenuAppBar /> */}
            </CustomTextField>
          </CustomFormControl>
          <CustomTextField
            id="ad-title"
            label="عنوان آگهی"
            variant="outlined"
            sx={{ width: "560px", height: "45px" }}
          />
          <CustomTextField
            id="text-area"
            label="مشخصات"
            variant="outlined"
            multiline
            rows={10}
            maxRows={10}
            sx={{ width: "560px" }}
          />
          <CustomTextField
            id="location"
            label="موقعیت مکانی"
            variant="outlined"
            sx={{ width: "560px", height: "45px" }}
          />
        </Grid>
        <Grid container xs={6}>
          <Grid container direction="column" gap="20px">
            <Box>
              <Typography variant="h3" fontSize="18px" fontWeight={400}>
                عکس آگهی
              </Typography>
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
        </Grid>
      </CustomGrid>
    </CustomBox>
    </>
  );
};
