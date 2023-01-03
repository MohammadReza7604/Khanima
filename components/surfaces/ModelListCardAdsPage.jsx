import React from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  styled,
  SvgIcon,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SellIcon from "@mui/icons-material/Sell";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

export const ModelListCardAdsPage = () => {
  return (
    <Card
      id="card"
      sx={{
        width: "920px",
        height: "225px",
        position: "relative",
        marginBottom: "20px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{
          width: "20px",
          height: "20px",
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
      >
        <TurnedInNotIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
      <Button
        variant="contained"
        sx={{
          width: "124px",
          height: "42px",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "10px 0",
          padding: "5px",
          position: "absolute",
          bottom: "0",
          right: "0",
        }}
      >
        مشاهده بیشتر
      </Button>
      <Stack width="100%" direction="row">
        <Box padding="16px">
          <Image width="177" height="177" src="/images/card.png" />
        </Box>
        <Stack
          width="609px"
          height="167px"
          direction="column"
          padding="20px 5px 14px 0"
          gap="20px"
        >
          <Stack justifyContent="space-between" direction="row">
            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
            <Typography textAlign="justify" fontSize="14px" fontWeight={300}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};
