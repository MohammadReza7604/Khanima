import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Link,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { LinkNavbar } from "./LinkNavbar";
import { LoginDialog } from "../feedback/LoginDialog";
import { RegisterDialog } from "../feedback/RegisterDialog";
import { AuthCodeInput } from "../feedback/AuthCodeInput";
import { ButtonMenu } from "../inputs/ButtonMenu";
import { UserMenu } from "../inputs/UserMenu";
import { AppBarMobile } from "../mobile/AppBarMobile";

export const HeaderNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const CustomGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
    },
  }));

  const CustomAppBar = styled(AppBar)(({ theme }) => ({
    height: "72px",
    justifyContent: "center",
    backgroundColor: "#1B1B1B",
    [theme.breakpoints.between("xs", "md")]: {
      backgroundColor: "inherit",
      display: "none",
      height: "34px",
    },
  }));
  const NavButtons = styled(Button)(({ theme }) => ({
    backgroundColor: "#282828",
    color: "#00A693",
    fontSize: "16px",
    fontWeight: 700,
    "&:hover": {
      color: "white",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
      fontWeight: 600,
    },
  }));
  const HeaderRight = styled(Grid)(({ theme }) => ({
    paddingLeft: "10px",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      // width:"246px"
    },
  }));

  return (
    <>
      <AppBarMobile />
      <CustomAppBar position="fixed">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              maxWidth: { xl: "1440px", md: "100%", sm: "100%" },
              margin: "0 auto",
            }}
          >
            <CustomGrid container direction="row">
              <HeaderRight
                container
                direction="row"
                alignItems="center"
                gap="20px"
                lg={8}
                xl={9}
                md={9}
              >
                <LinkNavbar id="home-navbar" href="/" text="خانه" />
                <ButtonMenu>دسته بندی ها</ButtonMenu>
                <LinkNavbar id="map-navbar" href="#" text="نقشه" />
                <LinkNavbar id="weblog-navbar" href="#" text="وبلاگ" />
                <LinkNavbar id="group-navbar" href="#" text="گروه‌ها" />
                <LinkNavbar id="rules-navbar" href="#" text="قوانین" />
                <LinkNavbar
                  id="proposal-navbar"
                  href="#"
                  text="پیشنهاد به ما"
                />
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
              </HeaderRight>
              <Grid container direction="row" lg={3} xl={3} md={3} gap="20px">
                <NavButtons id="ad-register" variant="contained">
                  ثبت آگهی
                </NavButtons>
                <NavButtons
                  id="login-register"
                  variant="contained"
                  onClick={handleClick}
                >
                  ورود‌‌‌ /‌ ثبت‌نام
                </NavButtons>
              </Grid>
            </CustomGrid>
          </Box>
        </Box>
        <LoginDialog />
        {/* <RegisterDialog /> */}
        {/* <AuthCodeInput /> */}
        <UserMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
      </CustomAppBar>
    </>
  );
};
