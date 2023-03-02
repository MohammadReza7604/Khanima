import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { CustomButtonSellerTerms } from "../inputs/CustomButtonSellerTerms";

export const SellerTerms = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 700,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "12px",
      alignSelf: "flex-start",
      color: "#00A693",
      paddingLeft: "22px",
    },
  }));
  const CustomTypo = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 700,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "12px",
      alignSelf: "flex-start",
      color: "#00A693",
      paddingLeft: "10px",
    },
  }));
  const Description = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    fontWeight: 500,
    textAlign: "justify",
    lineHeight: "230%",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
      alignSelf: "flex-start",
      lineHeight: "220%",
      padding: " 0 30px 50px 10px",
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    marginTop: "100px",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    [theme.breakpoints.between("xs", "md")]: {
      background: "url(/images/back-mobile.png)",
      marginTop: "26px",
      justifyContent: "unset",
      padding: "20px 0 0 20px",
    },
  }));
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
      <CustomGrid container>
        <Title variant="h1">قوانین و مقررات</Title>
        <Grid container justifyContent="center" alignItems="center" gap="22px">
          <CustomButtonSellerTerms text="در خانیما چه اجناسی را میشود آگهی کرد؟" />
          <CustomButtonSellerTerms text="در خانیما چه اجناسی را میشود آگهی کرد؟" />
          <CustomButtonSellerTerms text="در خانیما چه اجناسی را میشود آگهی کرد؟" />
          <CustomButtonSellerTerms text="در خانیما چه اجناسی را میشود آگهی کرد؟" />
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          gap="14px"
        >
          <CustomTypo variant="h3">
            سیاست نامه حریم خصوصی
          </CustomTypo>
          <Description variant="caption">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی.
            <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
            با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی.
          </Description>
        </Grid>
      </CustomGrid>
    </Grid>
  );
};
