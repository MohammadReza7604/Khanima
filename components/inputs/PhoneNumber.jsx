import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const PhoneNumber = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container direction="column" gap="18px" alignItems="center">
      <Box
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "280px",
          height: "38px",
          border: "2px solid #A6ABBD",
          borderRadius: "10px",
        }}
      >
        <InputBase
          dir="ltr"
          type="number"
          sx={{
            ml: 1,
            flex: 1,
            input: {
              "&::placeholder": {
                color: "black",
              },
            },
          }}
          placeholder="000 000 0000"
          inputProps={{ "aria-label": "phone-number" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography color="black">+98</Typography>
      </Box>
      <Box
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "280px",
          height: "38px",
          border: "2px solid #A6ABBD",
          borderRadius: "10px",
        }}
      >
        <InputBase
          type="password"
          sx={{
            ml: 1,
            flex: 1,
            input: {
              "&::placeholder": {
                color: "black",
              },
            },
          }}
          placeholder="رمز عبور "
          inputProps={{ "aria-label": "password" }}
        />
      </Box>
      <Grid container direction="row" gap="5px" justifyContent="center">
        <Link href="#" underline="none" color="#282828">
          در خانیما اکانت ندارید؟
        </Link>
        <Link href="#" underline="none">
          ثبت‌نام
        </Link>
      </Grid>
    </Grid>
  );
};
export const SinglePhoneNumber = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid container direction="column" gap="18px" alignItems="center">
      <Box
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "280px",
          height: "38px",
          border: "2px solid #A6ABBD",
          borderRadius: "10px",
        }}
      >
        <InputBase
          dir="ltr"
          type="number"
          sx={{
            ml: 1,
            flex: 1,
            input: {
              "&::placeholder": {
                color: "black",
              },
            },
          }}
          placeholder="000 000 0000"
          inputProps={{ "aria-label": "phone-number" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography color="black">+98</Typography>
      </Box>
      <Grid container direction="row" gap="5px" justifyContent="center">
        <Link href="#" underline="none" color="#282828">
          در خانیما اکانت ندارید؟
        </Link>
        <Link href="#" underline="none">
          ثبت‌نام
        </Link>
      </Grid>
    </Grid>
  );
};
