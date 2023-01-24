import React from "react";
import { AppBar, Box, Button, Grid, Link, Stack, styled } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { LinkNavbar } from "./LinkNavbar";
import { LoginDialog } from "../feedback/LoginDialog";
import { RegisterDialog } from "../feedback/RegisterDialog";
import { AuthCodeInput } from "../feedback/AuthCodeInput";

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
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "1440px" }}
        >
          <Stack direction="row" xs={10} gap="30px">
            <LinkNavbar href="/" text="خانه" />
            <LinkNavbar href="#" text="دسته بندی‌ها" />
            <LinkNavbar href="#" text="نقشه" />
            <LinkNavbar href="#" text="وبلاگ" />
            <LinkNavbar href="#" text="گروه‌ها" />
            <LinkNavbar href="#" text="قوانین" />
            <LinkNavbar href="#" text="پیشنهاد به ما" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <BookmarkOutlinedIcon />
              <LinkNavbar href="/bookmarks" text="علاقمندی" />
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
              <LinkNavbar href="/chat" text="چت" />
            </Box>
          </Stack>
          <Stack direction="row" gap="10px" xs={2}>
            <NavButtons variant="contained">ثبت آگهی</NavButtons>
            <NavButtons variant="contained">ورود‌‌‌ /‌ ثبت‌نام</NavButtons>
          </Stack>
        </Grid>
      </Box>
      <LoginDialog />
      {/* <RegisterDialog /> */}
      {/* <AuthCodeInput /> */}
    </AppBar>
  );
};
