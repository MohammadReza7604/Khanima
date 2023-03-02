import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CustomBox } from "../../layout/CustomBox";

export const ItemCard = () => {
  return (
    <Grid container direction="column" gap="10px">
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        <Typography
          variant="h1"
          fontSize="12px"
          fontWeight={700}
          position="absolute"
          top="-6px"
          left="30px"
          zIndex={2}
          padding="0 20px"
          backgroundColor="#282828"
        >
          حجره ها
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
            <Grid container direction="column" xs={8}>
              <Typography fontSize="10px" fontWeight={600} color="#282828">
                فروشگاه اطلس - شعبه ستارخان
              </Typography>
              <Typography fontSize="8px" fontWeight={600} color="#282828">
                محسن رضانژاد
              </Typography>
              <Grid container direction="row">
                <Grid container direction="row" gap="2px" xs={5}>
                  <LocationOnRoundedIcon
                    sx={{
                      color: "#FFC700",
                      width: "10px",
                      height: "10px",
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "8px", fontWeight: 600, color: "black" }}
                  >
                    تهران، ستارخان
                  </Typography>
                </Grid>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: "40px",
                    height: "14px",
                    fontSize: "6px",
                    fontWeight: 700,
                  }}
                  xs={4}
                >
                  مشاهده بیشتر
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" xs={4}>
              <IconButton
                sx={{
                  width: "3px",
                  height: "3px",
                  position: "absolute",
                  top: "14px",
                  right: "80px",
                  zIndex:2
                }}
              >
                <BookmarkBorderIcon
                  sx={{ width: "12px", height: "12px", color: "black" }}
                />
              </IconButton>
              <Box>
                <Image
                  width="70"
                  height="50"
                  style={{zIndex:1}}
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
      </Grid>

      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        position="relative"
        zIndex={1}
      >
        <Typography
          variant="h1"
          fontSize="8px"
          fontWeight={600}
          position="absolute"
          bottom="-6px"
          right="20px"
          zIndex={2}
          padding="0 20px"
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
            <Grid container direction="column" xs={8}>
              <Typography fontSize="10px" fontWeight={600} color="#282828">
                فروشگاه اطلس - شعبه ستارخان
              </Typography>
              <Typography fontSize="8px" fontWeight={600} color="#282828">
                محسن رضانژاد
              </Typography>
              <Grid container direction="row">
                <Grid container direction="row" gap="2px" xs={5}>
                  <LocationOnRoundedIcon
                    sx={{
                      color: "#FFC700",
                      width: "10px",
                      height: "10px",
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "8px", fontWeight: 600, color: "black" }}
                  >
                    تهران، ستارخان
                  </Typography>
                </Grid>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    width: "40px",
                    height: "14px",
                    fontSize: "6px",
                    fontWeight: 700,
                  }}
                  xs={4}
                >
                  مشاهده بیشتر
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" xs={4}>
              <IconButton
                sx={{
                  width: "3px",
                  height: "3px",
                  position: "absolute",
                  top: "14px",
                  right: "80px",
                  zIndex:2
                }}
              >
                <BookmarkBorderIcon
                  sx={{ width: "12px", height: "12px", color: "black" }}
                />
              </IconButton>
              <Box>
                <Image
                  width="70"
                  height="50"
                  style={{zIndex:1}}
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
      </Grid>
    </Grid>
  );
};
