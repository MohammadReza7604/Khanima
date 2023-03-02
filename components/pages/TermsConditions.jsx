import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { IconTitle2 } from "../data-display/IconTitle";
import { CustomBox } from "../layout/CustomBox";
import { TermsConditionsMobile } from "./mobile/TermsConditionsMobile";

export const TermsConditions = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 700,
    marginTop: "100px",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "12px",
      color: "#00A693",
      marginTop: "50px",
      alignSelf: "start",
      padding: "0 30px",
    },
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "30px 0 40px 0",
    gap: "50px",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "md")]: {
      justifyContent: "unset",
      background: "url(/images/back-mobile.png)",
      gap: "20px",
    },
  }));
  const Description = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "207%",
    textAlign: "justify",
    textJustify: "auto",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "8px",
      lineHeight: "298%",
    },
  }));
  const Wrapper = styled(Grid)(({ theme }) => ({
    gap: { xl: "5px", lg: "32px", md: "32px" },
    direction: "row",
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
    },
  }));
  return (
    <CustomGrid container>
      <Title variant="h1">قوانین مقررات</Title>
      <TermsConditionsMobile />
      <Wrapper container>
        <Grid container lg={4} md={3.7} xl={4}>
          <CustomBox
            width="440px"
            height="680px"
            style={{ width: { xl: "440px", lg: "300px", md: "300px" } }}
          >
            <Description variant="caption">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              <br /> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
              و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد.
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              <br />
            </Description>
          </CustomBox>
        </Grid>
        <Grid
          container
          direction="column"
          gap="10px"
          lg={3.5}
          md={3.5}
          xl={3.5}
        >
          <CustomBox
            width="370px"
            height="270px"
            style={{ width: { xl: "370px", lg: "290px", md: "290px" } }}
          >
            <Grid container gap="20px" padding="14px">
              <Typography variant="h3" fontSize="16px" fontWeight={600}>
                خرید امن
              </Typography>
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
            </Grid>
          </CustomBox>
          <CustomBox
            width="370px"
            height="270px"
            style={{ width: { xl: "370px", lg: "290px", md: "290px" } }}
          >
            <Grid container gap="20px" padding="14px">
              <Typography variant="h3" fontSize="16px" fontWeight={600}>
                خرید امن
              </Typography>
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
            </Grid>
          </CustomBox>
          <CustomBox
            width="370px"
            height="270px"
            style={{ width: { xl: "370px", lg: "290px", md: "290px" } }}
          >
            <Grid container gap="20px" padding="14px">
              <Typography variant="h3" fontSize="16px" fontWeight={600}>
                خرید امن
              </Typography>
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
            </Grid>
          </CustomBox>
        </Grid>
        <Grid container direction="column" gap="10px" xs={4} xl={4}>
          <CustomBox
            width="370px"
            height="270px"
            style={{ width: { xl: "370px", lg: "290px", md: "290px" } }}
          >
            <Grid container gap="20px" padding="14px">
              <Typography variant="h3" fontSize="16px" fontWeight={600}>
                خرید امن
              </Typography>
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
            </Grid>
          </CustomBox>
          <CustomBox
            width="370px"
            height="270px"
            style={{ width: { xl: "370px", lg: "290px", md: "290px" } }}
          >
            <Grid container gap="20px" padding="14px">
              <Typography variant="h3" fontSize="16px" fontWeight={600}>
                خرید امن
              </Typography>
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
            </Grid>
          </CustomBox>
          <CustomBox
            width="370px"
            height="270px"
            style={{ width: { xl: "370px", lg: "290px", md: "290px" } }}
          >
            <Grid container gap="20px" padding="14px">
              <Typography variant="h3" fontSize="16px" fontWeight={600}>
                خرید امن
              </Typography>
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
              <IconTitle2 title="قوانین و مقررات خرید امن خانیما" />
            </Grid>
          </CustomBox>
        </Grid>
      </Wrapper>
    </CustomGrid>
  );
};
