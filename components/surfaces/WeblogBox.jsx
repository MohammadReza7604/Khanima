import React from "react";
import { Button, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export const WeblogBox = () => {
  const CustomTypo = styled(Typography)({
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "17px",
    textAlign: "center",
    color: "#282828",
  });
  return (
    <Grid
      container
      sx={{
        width: "216px",
        height: "350px",
        backgroundColor: "white",
        boxShadow: "7px 4px 40px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        padding: "14px",
      }}
    >
      <Grid container direction="column" gap="19px">
        <Image
          width={186}
          height={136}
          alt="picture"
          src="/images/pic-web.png"
          style={{ borderRadius: "10px" }}
        />
        <Grid container direction="row">
          <Grid container direction="row" gap="2px" alignItems="center" xs={6}>
            <CustomTypo>2535</CustomTypo>
            <RemoveRedEyeOutlinedIcon sx={{ color: "#FFC700" }} />
          </Grid>
          <Grid container direction="row" gap="2px" alignItems="center" xs={6}>
            <CalendarMonthOutlinedIcon sx={{ color: "#FFC700" }} />
            <CustomTypo>1400/05/23</CustomTypo>
          </Grid>
        </Grid>
        <Typography variant="h2" fontWeight={700} fontSize="14px" color="black">
          گرامافون قاجاری 200 ساله
        </Typography>
        <Typography
          variant="h2"
          fontWeight={600}
          fontSize="10px"
          textAlign="justify"
          color="black"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "5px 5px 0 0",
            width: "136px",
            height: "28px",
            fontWeight: 600,
            alignSelf: "center",
          }}
        >
          مشاهده بیشتر
        </Button>
      </Grid>
    </Grid>
  );
};
