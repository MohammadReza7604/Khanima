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
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const SuggestPage = () => {
  const CustomTextField = styled(TextField)({
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
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "30px 0 40px 0",
        gap: "50px",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight={700}
        marginTop="100px"
      >
        پیشنهاد به ما
      </Typography>
      <Grid container direction="row" justifyContent="flex-start" gap="40px">
        <Grid container direction="column" gap="36px" xs={6}>
          <Grid container direction="column" gap="20px" alignItems="flex-end">
            <Typography
              variant="caption"
              fontSize="16px"
              fontWeight={700}
              alignSelf="center"
            >
              سوالات و نظرات خود را با پشتیبانی شیپور در میان بگذارید.
            </Typography>
            <Box sx={{ width: "560px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">دسته‌بندی</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="دسته‌بندی"
                  onChange={handleChange}
                  color="secondary"
                  sx={{
                    borderRadius: "7px",
                    border: "1px solid white",
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <CustomTextField
              id="text-area"
              label="پیام"
              variant="outlined"
              multiline
              rows={10}
              maxRows={10}
              sx={{ width: "560px" }}
            />
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "140px", alignSelf: "flex-end" }}
          >
            ارسال پیشنهاد
          </Button>
        </Grid>
        <Divider sx={{ border: "0.50px solid #00A693" }} xs={1} />
        <Grid container direction="column" gap="86px" xs={5}>
          <Typography
            variant="caption"
            fontSize="13px"
            fontWeight={400}
            width="360px"
            height="314px"
            textAlign="justify"
            lineHeight="216%"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "364px",
              height: "72px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            پیام به مدیر
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
