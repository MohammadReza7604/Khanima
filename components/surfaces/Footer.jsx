import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const CustomTypo = styled(Typography)({
    color: "#AEB4BE",
    fontSize: "14px",
    fontWeight: 400,
    "&::before": {
      content: '""',
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "7.5px",
      backgroundColor: "#FFC700",
    },
  });
  const Title = styled(Typography)({
    color: "#fff",
    fontSize: "14px",
    fontWeight: 700,
  });
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#1B1B1B",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "70px 0",
        }}
      >
        <Grid container direction="row" columnSpacing={1} xs={12}>
          <Grid xs={4} textAlign="center" alignSelf="center">
            <Typography
              variant="h3"
              sx={{ fontSize: "34px", fontWeight: 400, color: "#FFC700" }}
            >
              Khanima
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: "16px", fontWeight: 500, color: "#FFF" }}
            >
              خانیما، فروشگاه لوازم قدیمی
            </Typography>
          </Grid>
          <Grid xs={2} spacing={2}>
            <Stack gap="28px">
              <Title>دسترسی سریع</Title>
              <Stack gap="18px">
                <CustomTypo>لینک اول</CustomTypo>
                <CustomTypo>لینک دوم</CustomTypo>
                <CustomTypo>لینک سوم</CustomTypo>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={2}>
            <Stack gap="28px">
              <Title>لینک‌های مفید</Title>
              <Stack gap="18px">
                <CustomTypo>لینک اول </CustomTypo>
                <CustomTypo>لینک دوم </CustomTypo>
                <CustomTypo>لینک سوم </CustomTypo>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={4}>
            <Stack gap="28px">
              <Title>ارتباط با ما</Title>
              <Stack gap="18px">
                <CustomTypo>
                  آدرس: تهران، بلوار جمهوری، کوچه ی سعادت، پلاک سه{" "}
                </CustomTypo>
                <CustomTypo>ایمیل: compony@khanima.com 02634239221</CustomTypo>
                <CustomTypo>تلفن: 026-34239231 02634239221</CustomTypo>
                <CustomTypo>تلفن سراسری: 026-34239231</CustomTypo>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
