import {
  Button,
  Grid,
  InputBase,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { PhotoAddBox } from "../../surfaces/PhotoAddBox";

export const AddSellerMobile = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    padding: "40px 0 40px 0",
    justifyContent: "center",
    gap: "40px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const CustomTextField = styled(TextField)({
    width: "110px",
    height: "18px",
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
    input: {
      "&::placeholder": {
        fontSize: "8px",
      },
    },
  });

  return (
    <Wrapper container>
      <Grid container direction="row">
        <Grid
          container
          direction="column"
          paddingLeft="6px"
          gap="50px"
          xs={7.7}
        >
          <Grid container direction="row" gap="4px">
            <CustomTextField
              variant="outlined"
              id="name"
              placeholder="نام"
              autoComplete="off"
              type=""
            />
            <CustomTextField
              variant="outlined"
              id="last-name"
              placeholder="نام‌خانوادگی"
              autoComplete="off"
            />
          </Grid>
          <Grid container direction="row" gap="4px">
            <CustomTextField
              variant="outlined"
              id="password"
              placeholder="رمز عبور"
              autoComplete="off"
              type="password"
            />
            <CustomTextField
              variant="outlined"
              id="store-id"
              placeholder="آیدی فروشگاه"
              autoComplete="off"
              type="url"
            />
          </Grid>
          <CustomTextField
            variant="outlined"
            id="address"
            placeholder="آدرس"
            sx={{ width: "224px" }}
            autoComplete="off"
          />
          <CustomTextField
            variant="outlined"
            id="location-link"
            placeholder="لینک لوکیشن"
            sx={{ width: "224px" }}
            autoComplete="off"
            type="url"
          />
          <Grid container direction="row" gap="4px">
            <CustomTextField
              variant="outlined"
              id="telegram-id"
              placeholder="آیدی تلگرام"
              autoComplete="off"
              type="url"
            />
            <CustomTextField
              variant="outlined"
              id="eitaa-id"
              placeholder="آیدی ایتا"
              autoComplete="off"
              type="url"
            />
          </Grid>
          <Grid container direction="row" gap="4px">
            <CustomTextField
              variant="outlined"
              id="landline-number"
              placeholder="شماره تماس ثابت"
              autoComplete="off"
              type="number"
            />
            <CustomTextField
              variant="outlined"
              id="mobile-phone-number"
              placeholder="شماره تماس همراه"
              autoComplete="off"
              type="number"
            />
          </Grid>
          <CustomTextField
            variant="outlined"
            id="first-field"
            placeholder="اولین حوزه فعالیت"
            sx={{ width: "224px" }}
          />
          <Grid container direction="column" gap="5px">
            <Typography fontSize="10px" fontWeight={500}>
              حوزه فعالیت
            </Typography>
            <CustomTextField
              variant="outlined"
              id="first-field"
              sx={{ width: "128px" }}
            />
          </Grid>
          <Button
            startIcon={<AddIcon sx={{ color: "white" }} />}
            sx={{
              color: "white",
              width: "100px",
              fontSize: "10px",
              fontWeight: 500,
            }}
          >
            افزودن مورد
          </Button>
        </Grid>
        <Grid container direction="column" padding="0 10px" gap="148px" xs={1}>
          <CustomTextField
            id="description"
            placeholder="توضیحات"
            multiline
            rows={5}
            maxRows={5}
          />
          <Grid container direction="column">
            <Typography fontSize="8px" fontWeight={500}>
              عکس فروشگاه
            </Typography>
            <PhotoAddBox style={{ width: "110px" }} />
          </Grid>
        </Grid>
      </Grid>
      <Button
        size="small"
        variant="contained"
        sx={{
          color: "white",
          width: "118px",
          height: "30px",
          fontSize: "10px",
          fontWeight: 700,
        }}
      >
        افزودن فروشگاه
      </Button>
    </Wrapper>
  );
};
