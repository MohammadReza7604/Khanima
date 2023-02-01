import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import SellIcon from "@mui/icons-material/Sell";

export const BoxItemsCarousel = (props) => {
  let off = props.off;
  const Text = styled(Typography)({
    fontSize: "10px",
    fontWeight: 500,
    color: "rgba(40,40,40,0.7)",
    "&:hover": {
      color: "black",
    },
  });
  return (
    <Grid
      container
      width="215px"
      height="307px"
      boxShadow="7px 4px 40px rgba(0, 0, 0, 0.15)"
      bgcolor="white"
      borderRadius="10px"
      padding="15px"
      position="relative"
      gap="10px"
    >
      <IconButton
        sx={{
          width: "20px",
          height: "20px",
          position: "absolute",
          top: "14px",
          left: "14px",
        }}
      >
        <BookmarkBorderIcon
          sx={{ width: "20px", height: "20px", color: "black" }}
        />
      </IconButton>
      {off && (
        <Box
          sx={{
            width: "32px",
            height: "20px",
            position: "absolute",
            top: "10px",
            right: "14px",
            backgroundColor: "#282828",
            borderRadius: "0px 5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ color: "#FFC700", fontSize: "10px", fontWeight: 700 }}
          >
            25%
          </Typography>
        </Box>
      )}
      <Box>
        <Image
          width="185"
          height="135"
          src="/images/laptop.png"
          alt="laptop-image-box"
        />
        <Box
          width="95px"
          height="18px"
          bgcolor="rgba(40,40,40,0.5)"
          borderRadius="0 5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="135px"
          left="15px"
        >
          <Typography fontSize="10px" fontWeight={500}>
            وسایل موسیقی
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h4"
        width="128px"
        height="28px"
        fontSize="10px"
        fontWeight={600}
        color="black"
      >
        گرامافون قاجاری 200 ساله قاجاری اصل ناصرالدین شاه
      </Typography>
      <Grid container Direction="row" gap="4px">
        <SellIcon
          sx={{
            color: "#FFC700",
            width: "18px",
            height: "18px",
            transform: "rotate(80deg)",
          }}
        />
        <Typography
          sx={{ fontSize: "12px", fontWeight: 500, color: "#282828" }}
        >
          1,200,000 تومان
        </Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        <Text>تهران، ستارخان</Text>
        <Text>2 ساعت پیش</Text>
      </Grid>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "30px",
          fontSize: "12px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        مشاهده بیشتر
      </Button>
    </Grid>
  );
};
