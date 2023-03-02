import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SellIcon from "@mui/icons-material/Sell";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { MyAdsBoxMobile } from "./mobile/MyAdsBoxMobile";

export const MyAdsBox = () => {
  const CustomCard = styled(Card)(({ theme }) => ({
    width: "920px",
    height: "225px",
    position: "relative",
    marginBottom: "20px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between("xs", "md")]: {
      display:"none"
    },
  }));

  const CustomIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: "white",
    },
  });
  return (
    <>
      <MyAdsBoxMobile />
      <CustomCard id="card">
        <CustomIconButton
          sx={{
            width: "16px",
            height: "16px",
            position: "absolute",
            top: "12px",
            right: "12px",
          }}
        >
          <TurnedInNotIcon sx={{ width: "16px", height: "16px" }} />
        </CustomIconButton>
        <Grid
          container
          direction="row"
          gap="20px"
          position="absolute"
          bottom="0"
          left="0"
          justifyContent="end"
        >
          <CustomIconButton>
            <DeleteIcon />
          </CustomIconButton>
          <CustomIconButton>
            <CreateIcon />
          </CustomIconButton>
          <Button
            variant="contained"
            sx={{
              width: "124px",
              height: "42px",
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "10px 10px 0 0",
              padding: "5px",
            }}
          >
            ارتقاء آگهی
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "124px",
              height: "42px",
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "10px 0",
              padding: "5px",
            }}
          >
            مشاهده آگهی
          </Button>
        </Grid>

        <Grid container width="100%" direction="row">
          <Box padding="16px">
            <Image
              width="177"
              height="177"
              src="/images/card.png"
              alt="photo"
              style={{borderRadius:"10px"}}
            />
          </Box>
          <Stack
            container
            width="609px"
            height="167px"
            direction="column"
            padding="12px 5px 10px 0"
            gap="10px"
          >
            <Stack justifyContent="space-between" direction="row">
              <Box
                sx={{ display: "flex", gap: "10px", flexDirection: "column" }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontSize: "16px", fontWeight: 700, color: "#282828;" }}
                >
                  دفترچه قدیمی دوران ناصرالدین شاه
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "12px", fontWeight: 400, color: "#282828" }}
                >
                  خانه {">"} لوازم موسیقی
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
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
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
                  <DateRangeOutlinedIcon
                    sx={{
                      color: "#FFC700",
                      width: "18px",
                      height: "18px",
                    }}
                  />
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: 500, color: "#282828" }}
                  >
                    4 ماه قبل
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Box sx={{ width: "579px", height: "103px" }}>
              <Typography
                textAlign="justify"
                fontSize="14px"
                fontWeight={300}
                color="#282828"
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </CustomCard>
    </>
  );
};
