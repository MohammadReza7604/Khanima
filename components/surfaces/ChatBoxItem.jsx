import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconTitleChat } from "../data-display/IconTitle";

export const ChatBoxItem = () => {
  return (
    <>
      <Grid
        container
        width="264px"
        height="64px"
        padding="8px"
        borderRadius="5px"
        // bgcolor="#00A693"
        direction="column"
        gap="5px"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <IconTitleChat
              title="مرتضی شیرین زاده"
              sx={{ color: "#282828", fontSize: "12px", fontWeight: 600 }}
              icon={
                <Image
                  width={28}
                  height={28}
                  alt="profile-chat"
                  src="/images/profile-chat.png"
                  style={{ borderRadius: "5px" }}
                />
              }
            />
          </Box>
          <Box>
            <Typography fontSize="8px" fontWeight={400} color="#282828">
              پنج دقیقه پیش
            </Typography>
          </Box>
        </Grid>
        <Typography
          width="100%"
          fontSize="10px"
          fontWeight={400}
          color="#282828"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
          opacity="0.8"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی. بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی. بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
        </Typography>
      </Grid>
      <Divider />
    </>
  );
};
