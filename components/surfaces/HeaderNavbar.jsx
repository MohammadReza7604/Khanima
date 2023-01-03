import React from "react";
import { AppBar, Box, Button, Grid, Link, Stack, styled } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { LinkNavbar } from "./LinkNavbar";

export const HeaderNavbar = () => {
  const NavButtons = styled(Button)({
    backgroundColor: "#282828",
    color: "#00A693",
    fontSize: "16px",
    fontWeight: 700,
    "&:hover": {
      color: "white",
    },
  });
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1B1B1B",
        height: "72px",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
        <Stack
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          xs={12}
          sx={{ width: "1440px" }}
        >
          <Stack direction="row" xs={10} gap="30px">
            <LinkNavbar text="خانه" />
            <LinkNavbar text="دسته بندی‌ها" />
            <LinkNavbar text="نقشه" />
            <LinkNavbar text="وبلاگ" />
            <LinkNavbar text="گروه‌ها" />
            <LinkNavbar text="قوانین" />
            <LinkNavbar text="پیشنهاد به ما" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <BookmarkOutlinedIcon />
              <LinkNavbar text="علاقمندی" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <ChatBubbleRoundedIcon />
              <LinkNavbar text="چت" />
            </Box>
          </Stack>
          <Stack direction="row" gap="10px" xs={2}>
            <NavButtons variant="contained">ثبت آگهی</NavButtons>
            <NavButtons variant="contained">ورود‌‌‌ /‌ ثبت‌نام</NavButtons>
          </Stack>
        </Stack>
      </Box>
    </AppBar>
  );
};
