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
import { CustomBox } from "../../layout/CustomBox";
import SellIcon from "@mui/icons-material/Sell";

export const CardGoodsItems = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "2.2vw",
    fontWeight: 600,
    color: "#282828",
  }));
  const BoxTitle = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: 700,
    position: "absolute",
    top: "-6px",
    left: "30px",
    zIndex: 2,
    padding: "0 10px",
    backgroundColor: "#282828",
  }));
  const CustomGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "center",
    direction: "column",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  }));
  const Text = styled(Typography)({
    fontSize: "2.2vw",
    fontWeight: 500,
    color: "rgba(40,40,40,0.7)",
    "&:hover": {
      color: "black",
    },
  });
  return (
    <Grid container direction="column" gap="10px">
      <CustomGrid container>
        <BoxTitle variant="h1">اجناس</BoxTitle>
        <CustomBox
          width="328px"
          height="82px"
          style={{
            width: { md: "100%", sm: "100%", xs: "100%" },
            border: "2px solid #00A693",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              width: { md: "100%", sm: "100%", xs: "100%" },
              height: "60px",
              background: "white",
              boxShadow: "7px 4px 40px rgba(0, 0, 0, 0.15)",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <Grid container direction="column" xs={9} gap="2px">
              <Title>گرامافون قاجاری 200 ساله قاجاری اصل ناصرالدین شاه</Title>
              <Grid container Direction="row" gap="2px">
                <SellIcon
                  sx={{
                    color: "#FFC700",
                    width: "2.5vw",
                    height: "2.5vw",
                    transform: "rotate(80deg)",
                  }}
                />
                <Typography
                  sx={{ fontSize: "2.5vw", fontWeight: 500, color: "#282828" }}
                >
                  1,200,000 تومان
                </Typography>
              </Grid>
              <Grid container direction="row" justifyContent="space-between">
                <Text>تهران، ستارخان</Text>
                <Text>2 ساعت پیش</Text>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: "40px",
                    height: "14px",
                    fontSize: "6px",
                    fontWeight: 700,
                  }}
                >
                  مشاهده بیشتر
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" xs={3}>
              <IconButton
                sx={{
                  width: "3px",
                  height: "3px",
                  position: "absolute",
                  top: "14px",
                  right: { md: "80px", sm: "80px", xs: "78px" },
                  zIndex: 2,
                }}
              >
                <BookmarkBorderIcon
                  sx={{ width: "12px", height: "12px", color: "black" }}
                />
              </IconButton>
              <Box>
                <Image
                  width="70"
                  height="52"
                  style={{ zIndex: 1 }}
                  src="/images/laptop.png"
                  alt="laptop-image-box"
                />
                <Box
                  width="40px"
                  height="8px"
                  bgcolor="rgba(40,40,40,0.5)"
                  borderRadius="0 5px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  bottom="14px"
                  right="42px"
                  zIndex={3}
                >
                  <Typography fontSize="4px" fontWeight={600}>
                    وسایل موسیقی
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CustomBox>
      </CustomGrid>

      <CustomGrid container>
        <Typography
          variant="h1"
          fontSize="8px"
          fontWeight={600}
          position="absolute"
          bottom="-6px"
          right="20px"
          zIndex={2}
          padding="2px 10px"
          backgroundColor="#282828"
        >
          مشاهده بیشتر
        </Typography>
        <CustomBox
          width="328px"
          height="82px"
          style={{
            width: { md: "100%", sm: "100%", xs: "100%" },
            border: "2px solid #00A693",
            borderRadius: "5px",
            padding: "8px",
          }}
        >
          <Grid
            container
            direction="row"
            sx={{
              width: { md: "100%", sm: "100%", xs: "100%" },
              height: "60px",
              background: "white",
              boxShadow: "7px 4px 40px rgba(0, 0, 0, 0.15)",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <Grid container direction="column" xs={9} gap="2px">
              <Title>گرامافون قاجاری 200 ساله قاجاری اصل ناصرالدین شاه</Title>
              <Grid container Direction="row" gap="2px">
                <SellIcon
                  sx={{
                    color: "#FFC700",
                    width: "2.5vw",
                    height: "2.5vw",
                    transform: "rotate(80deg)",
                  }}
                />
                <Typography
                  sx={{ fontSize: "2.5vw", fontWeight: 500, color: "#282828" }}
                >
                  1,200,000 تومان
                </Typography>
              </Grid>
              <Grid container direction="row" justifyContent="space-between">
                <Text>تهران، ستارخان</Text>
                <Text>2 ساعت پیش</Text>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: "40px",
                    height: "14px",
                    fontSize: "6px",
                    fontWeight: 700,
                  }}
                >
                  مشاهده بیشتر
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" xs={3}>
              <IconButton
                sx={{
                  width: "3px",
                  height: "3px",
                  position: "absolute",
                  top: "14px",
                  right: { md: "80px", sm: "80px", xs: "78px" },
                  zIndex: 2,
                }}
              >
                <BookmarkBorderIcon
                  sx={{ width: "12px", height: "12px", color: "black" }}
                />
              </IconButton>
              <Box>
                <Image
                  width="70"
                  height="52"
                  style={{ zIndex: 1 }}
                  src="/images/laptop.png"
                  alt="laptop-image-box"
                />
                <Box
                  width="40px"
                  height="8px"
                  bgcolor="rgba(40,40,40,0.5)"
                  borderRadius="0 5px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  bottom="14px"
                  right="42px"
                  zIndex={3}
                >
                  <Typography fontSize="4px" fontWeight={600}>
                    وسایل موسیقی
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CustomBox>
      </CustomGrid>
    </Grid>
  );
};
