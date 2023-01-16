import {
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react";
import { CustomBox } from "../layout/CustomBox";

export const AddFriends = () => {
  const BoxTypography = styled(Typography)({
    fontSize: "16px",
    fontWeight: 600,
  });
  const CustomOutlinedInput = styled(TextField)({
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
      <Grid
        container
        marginTop="100px"
        direction="column"
        alignItems="center"
        gap="34.5px"
      >
        <Typography variant="h1" fontSize="24px" fontWeight={700}>
          معرفی به دوستان
        </Typography>
        <Typography variant="h4" fontSize="16px" fontWeight={600}>
          با معرفی هر یک از دوستان خود به خانیما با استفاده از کد زیر (کد مختص
          شما) 10 امتیاز بگیرید
        </Typography>
        <CustomBox
          width="274px"
          height="44px"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <BoxTypography>کد شما</BoxTypography>
            <BoxTypography>groplh</BoxTypography>
          </Grid>
        </CustomBox>
        <Grid container gap="18px" justifyContent="center">
          <Button variant="contained">اشتراک گذاری</Button>
          <Button variant="contained">کپی کردن</Button>
        </Grid>
        <Typography variant="h4" fontSize="16px" fontWeight={600}>
          کد معرفی که شما را به خانیما دعوت کرده را وارد کنید
        </Typography>
        <FormControl
          sx={{ m: 1, width: "245px", height: "44px" }}
          variant="outlined"
        >
          <CustomOutlinedInput id="code-check" />
        </FormControl>
        <Button variant="contained" sx={{ width: "94px", height: "34px" }}>
          بررسی کد
        </Button>
      </Grid>
    </Grid>
  );
};
