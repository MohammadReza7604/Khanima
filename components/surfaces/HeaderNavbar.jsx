import React, { useState } from "react";
import { AppBar, Box, Button, Grid, Link, Stack, styled } from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { LinkNavbar, LinkNavbarButton } from "./LinkNavbar";
import { LoginDialog } from "../feedback/LoginDialog";
import { RegisterDialog } from "../feedback/RegisterDialog";
import { AuthCodeInput } from "../feedback/AuthCodeInput";
import { CategorizeMenu } from "../navigation/CategorizeMenu";

export const HeaderNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <LinkNavbar id="home-navbar" href="/" text="خانه" />
            <LinkNavbarButton
              id="categorize-navbar"
              aria-controls={open ? "categorize-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              text="دسته بندی‌ها"
              onClick={handleClick}
            />
            <LinkNavbar id="map-navbar" href="#" text="نقشه" />
            <LinkNavbar id="weblog-navbar" href="#" text="وبلاگ" />
            <LinkNavbar id="group-navbar" href="#" text="گروه‌ها" />
            <LinkNavbar id="rules-navbar" href="#" text="قوانین" />
            <LinkNavbar id="proposal-navbar" href="#" text="پیشنهاد به ما" />
            {/* <CategorizeMenu
            id="categorize-menu"
              MenuListProps={{
                "aria-labelledby": "categorize-navbar",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            /> */}
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
