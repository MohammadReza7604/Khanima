import React from "react";
import { Box, Button, Card, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import SellIcon from "@mui/icons-material/Sell";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export const MyAdsBoxMobile = () => {
  const CustomCard = styled(Card)(({ theme }) => ({
    width: "100%",
    height: "100px",
    position: "relative",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display:"none"
    },
  }));
  const CustomIconButton = styled(IconButton)({
    width:"10px",height:"10px",
    "&:hover": {
      backgroundColor: "white",
    },
  });

  return (
    <CustomCard id="card">
      <CustomIconButton
        sx={{
          width: "12px",
          height: "12px",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <TurnedInNotIcon sx={{ width: "12px", height: "12px" }} />
      </CustomIconButton>
      <Grid
        container
        direction="row"
        gap="10px"
        position="absolute"
        bottom="0px"
        left="3px"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <CustomIconButton>
          <DeleteIcon sx={{width:"10px",height:"10px"}} />
        </CustomIconButton>
        <CustomIconButton>
          <CreateIcon sx={{width:"10px",height:"10px"}} />
        </CustomIconButton>
        <Button
          variant="contained"
          sx={{
            width: "44px",
            height: "12px",
            fontSize: "8px",
            fontWeight: 500,
            borderRadius: "10px 10px 0 0",
            padding: "5px",
          }}
        >
          ارتقاء آگهی
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: "44px",
            height: "12px",
            fontSize: "7px",
            fontWeight: 500,
            borderRadius: "10px 0",
            padding: "5px",
          }}
        >
          مشاهده آگهی
        </Button>
      </Grid>

      <Grid container width="100%" height="82px" direction="row">
        <Grid padding="5px" xs={3}>
          <Image width={70} height={70} src="/images/card.png" alt="photo" style={{borderRadius:"5px"}}/>
        </Grid>
        <Grid
        xs={9}
          container
          width="100%"
          // height="167px"
          direction="column"
          padding="2px 18px 0 0"
          gap="10px"
        >
          <Stack direction="row" gap="30px">
            <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
              <Typography
                variant="h3"
                sx={{ fontSize: "8px", fontWeight: 700, color: "#282828;" }}
              >
                دفترچه قدیمی دوران ناصرالدین شاه
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "7px", fontWeight: 400, color: "#282828" }}
              >
                خانه {">"} لوازم موسیقی
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
                <SellIcon
                  sx={{
                    color: "#FFC700",
                    width: "9px",
                    height: "9px",
                    transform: "rotate(80deg)",
                  }}
                />
                <Typography
                  sx={{ fontSize: "7px", fontWeight: 500, color: "#282828" }}
                >
                  1,200,000 تومان
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
                <DateRangeOutlinedIcon
                  sx={{
                    color: "#FFC700",
                    width: "9px",
                    height: "9px",
                  }}
                />
                <Typography
                  sx={{ fontSize: "6px", fontWeight: 300, color: "#282828" }}
                >
                  4 ماه قبل
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Box sx={{ width: "100%", height: "auto" }}>
            <Typography
              textAlign="justify"
              fontSize="10px"
              fontWeight={500}
              color="#282828"
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CustomCard>
  );
};
