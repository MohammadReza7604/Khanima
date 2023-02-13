import React from "react";
import { Button, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export const WeblogBoxMobile = () => {
  const CustomTypo = styled(Typography)({
    fontWeight: 600,
    fontSize: "6px",
    textAlign: "center",
    color: "#282828",
  });
  return (
    <Grid
      container
      sx={{
        width: "124px",
        height: "204px",
        backgroundColor: "white",
        boxShadow: "7px 4px 40px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        padding: "4px",
      }}
    >
      <Grid container direction="column" gap="7px">
        <Image
          width={108}
          height={80}
          alt="picture"
          src="/images/pic-web.png"
          style={{ borderRadius: "5px" }}
        />
        <Grid container direction="row" padding="0 5px">
          <Grid container direction="row" gap="2px" alignItems="center" xs={6}>
            <CustomTypo>2535</CustomTypo>
            <RemoveRedEyeOutlinedIcon sx={{ width:"12px",height:"12px", color: "#FFC700" }} />
          </Grid>
          <Grid container direction="row" gap="2px" alignItems="center" xs={6}>
            <CalendarMonthOutlinedIcon sx={{ width:"12px",height:"12px", color: "#FFC700" }} />
            <CustomTypo>1400/05/23</CustomTypo>
          </Grid>
        </Grid>
        <Typography variant="h2" fontWeight={700} fontSize="9px" color="black" alignSelf="center">
          گرامافون قاجاری 200 ساله
        </Typography>
        <Typography
          variant="h2"
          fontWeight={500}
          fontSize="5px"
          textAlign="justify"
          color="black"
          lineHeight="180%"
          padding=" 0 5px"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: "5px 5px 0 0",
            width: "90px",
            height: "16px",
            fontWeight: 600,
            alignSelf: "center",
            fontSize:"8px"
          }}
        >
          مشاهده بیشتر
        </Button>
      </Grid>
    </Grid>
  );
};
