import React from "react";
import { Box, Button, Divider, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import ReportIcon from "@mui/icons-material/Report";

export const CommentBox = (props) => {
  const CustomButton = styled(Button)({
    borderRadius: "5px 5px 0 0",
    color: "white",
    fontWeight: 700,
  });
  return (
    <Grid
      container
      bgcolor="white"
      width="995px"
      height="110px"
      borderRadius="10px"
      direction="row"
      padding="14px"
      position="relative"
      marginBottom="24px"
    >
      <Grid
        container
        position="absolute"
        bottom="0"
        left="0"
        justifyContent="flex-end"
        gap="12px"
      >
        <CustomButton
          variant="contained"
          sx={{ width: "130px", height: "30px" }}
        >
          جواب دادن
        </CustomButton>
        <CustomButton variant="contained">
          <ReportIcon sx={{ color: "white" }} />
        </CustomButton>
        <CustomButton variant="contained">
          <ShareIcon sx={{ color: "white" }} />
        </CustomButton>

        <CustomButton variant="contained">
          <ThumbUpIcon sx={{ color: "white" }} />
        </CustomButton>
        <Button variant="contained" sx={{ borderRadius: "5px 0" }}>
          <ThumbDownAltIcon sx={{ color: "white" }} />
        </Button>
      </Grid>
      <Grid container direction="row" gap="10px" xs={12}>
        <Grid container xs={1} justifyContent="center" alignItems="center">
          <Image
            src={props.src}
            alt="picture"
            width={76}
            height={76}
            style={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid
          container
          direction="column"
          gap="10px"
          justifyContent="center"
          xs={1.5}
        >
          <Typography
            variant="caption"
            fontSize="12px"
            fontWeight={500}
            color="#282828"
          >
            {props.username}
          </Typography>
          <Typography
            variant="caption"
            fontSize="8px"
            fontWeight={400}
            color="#282828"
          >
            {props.time}
          </Typography>
        </Grid>
        <Divider sx={{ border: "0.50px solid #00A693" }} xs={1} />
        <Grid container xs={8.5}>
          <Typography
            variant="caption"
            fontSize="12px"
            fontWeight={500}
            lineHeight="190%"
            color="#282828"
            textAlign="justify"
          >
            {props.commentText}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
