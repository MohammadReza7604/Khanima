import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

export const BoxItemsShopCarousel = () => {
  const Text = styled(Typography)({
    fontSize: "10px",
    fontWeight: 500,
    color: "rgba(40,40,40,0.7)",
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
          top: "10px",
          left: "10px",
          zIndex:1
        }}
      >
        <BookmarkBorderIcon
          sx={{ width: "20px", height: "20px", color: "black" }}
        />
      </IconButton>
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

      <Typography variant="h3" fontSize="12px" fontWeight={700} color="black">
        فروشگاه اطلس - شعبه ستارخان
      </Typography>
      <Typography variant="h4" fontSize="12px" fontWeight={600} color="black">
        محسن رضانژاد
      </Typography>
      <Grid container Direction="row" gap="4px">
        <LocationOnRoundedIcon
          sx={{
            color: "#FFC700",
            width: "18px",
            height: "18px",
          }}
        />
        <Typography sx={{ fontSize: "10px", fontWeight: 600, color: "black" }}>
          تهران، ستارخان
        </Typography>
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

export const BoxItemsShopCarouselMobile = () => {

  return (
    <Grid
      container
      width="100%"
      height="204px"
      boxShadow="7px 4px 40px rgba(0, 0, 0, 0.15)"
      bgcolor="white"
      borderRadius="5px"
      padding="8px"
      position="relative"
      gap="5px"
    >
      <IconButton
        sx={{
          width: "14px",
          height: "14px",
          position: "absolute",
          top: "4px",
          left: "4px",
          zIndex:1
        }}
      >
        <BookmarkBorderIcon
          sx={{ width: "14px", height: "14px", color: "black" }}
        />
      </IconButton>
      <Box>
        <Image
          width="134"
          height="98"
          src="/images/laptop.png"
          alt="laptop-image-box"
        />
        <Box
          width="68px"
          height="14px"
          bgcolor="rgba(40,40,40,0.5)"
          borderRadius="0 5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="96px"
          left="15px"
        >
          <Typography fontSize="7px" fontWeight={500}>
            وسایل موسیقی
          </Typography>
        </Box>
      </Box>

      <Typography variant="h3" fontSize="10px" fontWeight={700} color="black">
        فروشگاه اطلس - شعبه ستارخان
      </Typography>
      <Typography variant="h4" fontSize="10px" fontWeight={500} color="black">
        محسن رضانژاد
      </Typography>
      <Grid container Direction="row" gap="4px">
        <LocationOnRoundedIcon
          sx={{
            color: "#FFC700",
            width: "8px",
            height: "8px",
          }}
        />
        <Typography sx={{ fontSize: "8px", fontWeight: 500, color: "black" }}>
          تهران، ستارخان
        </Typography>
      </Grid>
      <Button
        variant="contained"
        size="small"
        sx={{
          width: "100%",
          height: "18px",
          fontSize: "10px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        مشاهده بیشتر
      </Button>
    </Grid>
  );
};
