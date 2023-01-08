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

export const AddAdAnotherVersionPage = () => {
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
  const CustomGrid = styled(Grid)({
    flexDirection: "row",
    gap: "8px",
  });

  return (
    <Box
      sx={{ maxWidth: "1440px", margin: "0 auto", padding: "30px 0 40px 0" }}
    >
      <Box margin="100px 0 0 0" textAlign="center">
        <Typography variant="h3" fontSize="28px" fontWeight={700}>
          ثبت آگهی
        </Typography>
      </Box>
      <Grid container direction="row" margin="100px 0">
        <Grid container direction="column" gap="40px" xs={6}>
          <FormControl sx={{ width: "418px", height: "45px" }}>
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
          <Grid container direction="column">
            <Box>
              <Typography variant="h3" fontSize="16px" fontWeight={400}>
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
            <Button variant="contained" width="172px" height="50px">
              ثبت آگهی
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
