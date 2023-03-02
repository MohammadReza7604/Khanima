import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import { CustomBox } from "../../layout/CustomBox";
import { IconTitle2 } from "../../data-display/IconTitle";

export const TermsConditionsMobile = () => {
  const Wrapper = styled(Grid)(({ theme }) => ({
    direction: "column",
    padding: "0 16px",
    gap: "20px",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  return (
    <Wrapper container>
      <CustomBox
        width="360px"
        height="234px"
        style={{
          borderRadius: "5px",
          border: "2px solid #00A693",
          padding: "10px",
        }}
      >
        <Typography
          variant="h3"
          fontSize="10px"
          fontWeight={500}
          textAlign="justify"
          lineHeight="200%"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید
          سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
        </Typography>
      </CustomBox>
      <Grid container direction="row" gap="18px" justifyContent="center">
        <CustomBox
          width="170px"
          height="146px"
          style={{
            borderRadius: "5px",
            border: "2px solid #00A693",
            padding: "6px",
            width: { xs: "152px" },
          }}
        >
          <Grid container gap="4px">
            <Typography
              variant="h3"
              sx={{ fontSize: "10px", fontWeight: 600, marginBottom: "6px" }}
            >
              خرید امن
            </Typography>
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
          </Grid>
        </CustomBox>
        <CustomBox
          width="170px"
          height="146px"
          style={{
            borderRadius: "5px",
            border: "2px solid #00A693",
            padding: "6px",
            width: { xs: "152px" },
          }}
        >
          <Grid container gap="4px">
            <Typography
              variant="h3"
              sx={{ fontSize: "10px", fontWeight: 600, marginBottom: "6px" }}
            >
              خرید امن
            </Typography>
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
          </Grid>
        </CustomBox>
      </Grid>
      <Grid container direction="row" gap="18px" justifyContent="center">
        <CustomBox
          width="170px"
          height="146px"
          style={{
            borderRadius: "5px",
            border: "2px solid #00A693",
            padding: "6px",
            width: { xs: "152px" },
          }}
        >
          <Grid container gap="4px">
            <Typography
              variant="h3"
              sx={{ fontSize: "10px", fontWeight: 600, marginBottom: "6px" }}
            >
              خرید امن
            </Typography>
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
          </Grid>
        </CustomBox>
        <CustomBox
          width="170px"
          height="146px"
          style={{
            borderRadius: "5px",
            border: "2px solid #00A693",
            padding: "6px",
            width: { xs: "152px" },
          }}
        >
          <Grid container gap="4px">
            <Typography
              variant="h3"
              sx={{ fontSize: "10px", fontWeight: 600, marginBottom: "6px" }}
            >
              خرید امن
            </Typography>
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
            <IconTitle2
              styleText={{ fontSize: { md: "9px", sm: "9px", xs: "8px" } }}
              styleIcon={{
                width: { md: "16px", sm: "16px", xs: "18px" },
                height: { md: "16px", sm: "16px", xs: "18px" },
              }}
              title="قوانین و مقررات خرید امن خانیما"
            />
          </Grid>
        </CustomBox>
      </Grid>
    </Wrapper>
  );
};
