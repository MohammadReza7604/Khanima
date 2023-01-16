import React from "react";
import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { PhotoAddBox } from "../surfaces/PhotoAddBox";
import AddIcon from "@mui/icons-material/Add";

export const AddSeller = () => {
  const CustomTextField = styled(TextField)({
    width: "265px",
    height: "44px",
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
        padding: "40px 0 40px 0",
      }}
    >
      <Grid
        container
        marginTop="100px"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          gap="38px"
          direction="column"
          id="right-box"
          height="100%"
          xs={6}
        >
          <Grid container gap="30px">
            <CustomTextField variant="outlined" id="name" label="نام" />
            <CustomTextField
              variant="outlined"
              id="last-name"
              label="نام‌خانوادگی"
            />
          </Grid>
          <Grid container gap="30px">
            <CustomTextField
              variant="outlined"
              id="store-name"
              label="نام فروشگاه"
            />
            <CustomTextField
              variant="outlined"
              id="store-id"
              label="آیدی فروشگاه"
            />
          </Grid>
          <CustomTextField
            variant="outlined"
            id="address"
            label="آدرس"
            sx={{ width: "560px" }}
          />
          <CustomTextField
            variant="outlined"
            id="location-link"
            label="لینک لوکیشن"
            sx={{ width: "560px" }}
          />
          <Grid container gap="30px">
            <CustomTextField
              variant="outlined"
              id="landline-number"
              label="شماره تماس ثابت"
            />
            <CustomTextField
              variant="outlined"
              id="mobile-phone-number"
              label="شماره تماس همراه"
            />
          </Grid>
          <Grid container gap="30px">
            <CustomTextField
              variant="outlined"
              id="telegram-id"
              label="آیدی تلگرام"
            />
            <CustomTextField
              variant="outlined"
              id="eitaa-id"
              label="آیدی ایتا"
            />
          </Grid>
          <CustomTextField
            variant="outlined"
            id="password"
            label="رمز عبور"
            sx={{ width: "560px" }}
          />
          <Grid container justifyContent="flex-end" marginTop="30px">
            <Button
              variant="contained"
              sx={{
                color: "white",
                width: "174px",
                height: "44px",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              افزودن فروشگاه
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          id="left-box"
          height="100%"
          direction="column"
          gap="240px"
          xs={6}
        >
          <Box>
            <CustomTextField
              id="description"
              label="توضیحات"
              multiline
              rows={10}
              maxRows={10}
              minRows={10}
              sx={{ width: "600px" }}
            />
          </Box>
          <Grid container direction="row" width={"fit-content"}>
            <Grid container direction="column" gap="22px" xs={6}>
              <Typography fontSize="16px" fontWeight={500}>
                عکس فروشگاه
              </Typography>
              <PhotoAddBox />
            </Grid>
            <Grid container direction="column" gap="22px" xs={6}>
              <Typography fontSize="16px" fontWeight={500}>
                حوزه فعالیت
              </Typography>
              <CustomTextField
                variant="outlined"
                id="first-field"
                label="اولین حوزه فعالیت"
                sx={{ width: "352px" }}
              />
              <Button
                startIcon={<AddIcon sx={{ color: "white" }} />}
                sx={{
                  color: "white",
                  width: "120px",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                افزودن مورد
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
