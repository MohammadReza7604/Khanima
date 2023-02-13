import {
  Divider,
  Grid,
  Menu,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const menuItem = [
  "All Categories",
  "Mobile",
  "Desktop",
  "Car",
  "Laptop",
  "Camera",
];
export const UserMenu = (props) => {
  const Text = styled(Typography)({
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "20px",
    color: "#282828",
    padding:"3px"
  });
  const CustomDivider = styled(Divider)({
    borderWidth: "1px",
  });
  return (
    <Menu
      id="user-menu"
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.onClose}
      sx={{top:"56px",right:"180px"}}
    >
      <Grid
        container
        direction="column"
        gap="5px"
        sx={{
          padding: "8px 20px 12px 20px",
          justifyContent: "space-between",
          width: "202px",
          height: "auto",
          borderRadius: "15px 0px 15px 15px",
        }}
      >
        <Grid container direction="row" justifyContent="space-between">
          <MenuItem><Text>حجره من</Text></MenuItem>
          <Image
            width={24}
            height={24}
            src="/images/profile-chat.png"
            alt="profile-photo"
            style={{ borderRadius: "4px" }}
          />
        </Grid>
        <CustomDivider />
        <MenuItem>
          <Text>آگهی‌های من</Text>
        </MenuItem>
        <MenuItem>
          <Text>نشان شده ها</Text>
        </MenuItem>
        <MenuItem>
          <Text>ارتقای کاربری</Text>
        </MenuItem>
        <CustomDivider />
        <MenuItem>
          <Text>معرفی به دوستان</Text>
        </MenuItem>
        <CustomDivider />
        <MenuItem>
          <Text>سوابق پرداختی</Text>
        </MenuItem>
        <MenuItem>
          <Text>خرید تضمینی</Text>
        </MenuItem>
        <CustomDivider />
        <MenuItem>
          <Text>درباره ما</Text>
        </MenuItem>
        <MenuItem>
          <Text>تنظیمات سایت</Text>
        </MenuItem>
        <MenuItem>
          <Text>پشتیبانی و راهنمای خانیما</Text>
        </MenuItem>
        <MenuItem>
          <Text>قوانین و مقررات</Text>
        </MenuItem>
        <CustomDivider />
        <MenuItem>
          <Text sx={{color:"red"}}>خروج</Text>
        </MenuItem>
      </Grid>
    </Menu>
  );
};
