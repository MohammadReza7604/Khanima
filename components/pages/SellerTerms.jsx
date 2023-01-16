import { Grid, Typography } from "@mui/material";
import React from "react";
import { CustomButtonSellerTerms } from "../inputs/CustomButtonSellerTerms";

export const SellerTerms = () => {
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
        justifyContent="center"
        alignItems="center"
        gap="40px"
      >
        <Typography variant="h1" fontSize="24px" fontWeight={700}>
          قوانین و مقررات
        </Typography>
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
          <Typography variant="h3" fontSize="20px" fontWeight={700}>
            سیاست نامه حریم خصوصی
          </Typography>
          <Typography
            variant="caption"
            fontSize="18px"
            fontWeight={600}
            textAlign="justify"
            lineHeight="260%"
          >
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
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
