import React from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import SellIcon from "@mui/icons-material/Sell";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

export const CardBoxAdsPage = () => {
  return (
    <Card
      id="card"
      sx={{
        width: "324px",
        height: "156px",
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
          width: "26px",
          height: "26px",
          position: "absolute",
          top: "15px",
          right: "15px",
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
      >
        <TurnedInNotIcon
          sx={{ width: "26px", height: "26px", color: "#282828" }}
        />
      </IconButton>
      <Box
        sx={{
          width: "26px",
          height: "26px",
          position: "absolute",
          top: "12px",
          left: "15px",
          backgroundColor: "#282828",
          borderRadius: "5px 0px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "#FFC700", fontSize: "10px", fontWeight: 500 }}
        >
          25%
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "110px",
          height: "38px",
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
          <Image width="122" height="122" src="/images/card.png" />
        </Box>
        <Stack
          width="609px"
          height="167px"
          direction="column"
          padding="20px 5px 14px 0"
          gap="10px"
        >
          <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <Typography
              variant="h3"
              sx={{ fontSize: "16px", fontWeight: 700, color: "#282828;" }}
            >
              رنو تالیسان
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
                  width: "10px",
                  height: "10px",
                  transform: "rotate(80deg)",
                }}
              />
              <Typography
                sx={{ fontSize: "10px", fontWeight: 500, color: "#282828" }}
              >
                1,200,000 تومان
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
              <DateRangeOutlinedIcon
                sx={{
                  color: "#FFC700",
                  width: "10px",
                  height: "10px",
                }}
              />
              <Typography
                sx={{ fontSize: "10px", fontWeight: 500, color: "#282828" }}
              >
                4 ماه قبل
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};
