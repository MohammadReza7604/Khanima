import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconTitleGlobal } from "../data-display/IconTitle";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

export const CarouselGroupMainPageBox = (props) => {
  return (
    <Grid
      container
      direction="column"
      width="212px"
      height="286px"
      borderRadius="15px"
      bgcolor="#00A693"
      padding="12px"
      gap="14px"
      alignItems="center"
    >
      <Typography variant="h5" fontSize="18px" fontWeight={700}>
        عتیقه فروشان غرب
      </Typography>
      <Image
        width={174}
        height={174}
        alt="picture-box"
        src="/images/pic-box.png"
        style={{ borderRadius: "10px" }}
      />
      <Grid container direction="row" justifyContent="space-around">
        <Grid
          container
          bgcolor="white"
          width="78px"
          height="26px"
          borderRadius="5px"
          padding="3px"
          justifyContent="center"
        >
          <IconTitleGlobal
            style={{ color: "black", fontSize: "14px", fontWeight: 700 }}
            title="35 جنس"
            icon={<MusicNoteIcon sx={{ color: "#FFC700" }} />}
          />
        </Grid>
        <Grid
          container
          bgcolor="white"
          width="78px"
          height="26px"
          borderRadius="5px"
          padding="3px"
          justifyContent="center"
        >
          <IconTitleGlobal
            style={{ color: "black", fontSize: "14px", fontWeight: 700 }}
            title="23 پیام"
            icon={<ChatBubbleOutlinedIcon sx={{ color: "#FFC700" }} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
