import {
  Button,
  Divider,
  FormControl,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const ProposalMobile = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    background: "url(/images/back-mobile.png)",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  const CustomFormControl = styled(FormControl)(({ theme }) => ({
    width: "100%",
    height: "40px",
  }));
  const TextFieldCustom = styled(TextField)(({ theme }) => ({
    width: "100%",
    height: "40px",
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
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper container>
      <Grid
        container
        direction="column"
        marginTop="70px"
        padding="20px 10px"
        gap="34px"
      >
        <Typography fontSize="12px" fontWeight={700}>
          پیشنهاد به ما
        </Typography>
        <Typography fontSize="10px" fontWeight={500}>
          سوالات و پیشنهادات خود را با پشتیبانی خانیما در میان بگذارید.
        </Typography>
        <Grid container direction="column" gap="30px">
          <CustomFormControl>
            <TextFieldCustom
              id="outlined-select-currency"
              select
              variant="outlined"
              label="دسته‌بندی"
              value={value}
              onChange={handleChange}
            ></TextFieldCustom>
          </CustomFormControl>
          <TextFieldCustom
            id="description"
            placeholder="پیام"
            multiline
            rows={7}
            maxRows={7}
          />
          <Button
            size="small"
            variant="contained"
            sx={{
              color: "white",
              width: "100px",
              height: "30px",
              fontSize: "10px",
              fontWeight: 700,
              alignSelf: "flex-end",
              marginTop: "160px",
            }}
          >
            ارسال پیشنهاد
          </Button>
        </Grid>
        <Divider sx={{ width: "100%", borderColor: "#00A693" }} />
        <Grid container direction="column" gap="30px" >
          <Typography
            fontSize="10px"
            fontWeight={500}
            textAlign="justify"
            lineHeight="207%"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </Typography>
          <Button
            size="small"
            variant="contained"
            sx={{
              color: "black",
              width: "272px",
              height: "30px",
              fontSize: "10px",
              fontWeight: 700,
              alignSelf: "center",
            }}
          >
            پیام به مدیر عامل
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
