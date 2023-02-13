import React, { useState } from "react";
import {
  Button,
  ButtonBase,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Paper,
  styled,
  Typography,
} from "@mui/material";

const items1 = [
  "لوازم آشپزخانه",
  "وسایل شخصی",
  "سکه، تمبر، اسکناس",
  "ابزار و تجهیزات",
  "سرگرمی",
  "حراجی",
  "کارشناسی",
  "نیازمندی",
  "متفرقه",
];
const items2 = [
  "گرامافون و صفحه",
  "ضبط صوت و نوار کاست",
  "رادیو",
  "واکمن",
  "هدفون و میکروفون",
  "سایر لوازم صوتی",
];
const items3 = [
  "گرامافون و صفحه",
  "ضبط صوت و نوار کاست",
  "رادیو",
  "واکمن",
  "هدفون و میکروفون",
];
export const ButtonMenu = (props) => {
  const Title = styled(Typography)({
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "20px",
    color: "#282828",
    paddingLeft: "8px",
  });
  const SubTitle = styled(Typography)({
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "20px",
    color: "#282828",
    padding: "8px",
  });
  const Item = styled(Typography)({
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "20px",
    color: "#282828",
    padding: "4px",
  });
  const CustomDivider = styled(Divider)({
    border: "1px solid #282828",
    opacity: "0.5",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase
        id="category-button"
        onClick={handleClick}
        variant="text"
        sx={{ color: "white", fontSize: {xl:"16px",lg:"14px"}, fontWeight: 600 }}
      >
        {props.children}
      </ButtonBase>

      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{top:"22px"}}
      >
        <Grid
          container
          direction="row"
          padding="26px 0 14px 20px"
          justifyContent="space-between"
          sx={{
            width: "980px",
            height: "auto",
            borderRadius: "15px 0px 15px 15px",
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            gap="10px"
            xs={1.5}
          >
            <Title>لوازم خانه</Title>
            {items1.map((item, index) => (
              <MenuItem key={index}>
                <SubTitle>{item}</SubTitle>
              </MenuItem>
            ))}
          </Grid>
          <Divider sx={{ borderWidth: "1px" }} />
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            padding="0 28px"
            xs={2}
          >
            <Grid container direction="column" gap="4px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items2.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
            <Grid container direction="column" gap="2px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items3.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            padding="0 28px"
            xs={2}
          >
            <Grid container direction="column" gap="4px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items2.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
            <Grid container direction="column" gap="2px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items3.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            padding="0 28px"
            xs={2}
          >
            <Grid container direction="column" gap="4px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items2.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
            <Grid container direction="column" gap="2px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items3.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            padding="0 28px"
            xs={2}
          >
            <Grid container direction="column" gap="4px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items2.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
            <Grid container direction="column" gap="2px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items3.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            padding="0 28px"
            xs={2}
          >
            <Grid container direction="column" gap="4px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items2.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
            <Grid container direction="column" gap="2px">
              <Title>لوازم صوتی</Title>
              <CustomDivider />
              {items3.map((item, index) => (
                <MenuItem key={index}>
                  <Item>{item}</Item>
                </MenuItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </>
  );
};
