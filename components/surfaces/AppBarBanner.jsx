import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const AppBarBanner = () => {
  const HeaderTitle = styled(Typography)({
    fontSize: "36px",
    fontWeight: 700,
    color: "white",
  });
  const TextFieldCustom = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#00A693",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "& .MuiSelect-icon": {
        color: "white",
      },
    },
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "422px",
        background: "url(/images/app-bar-banner-pic.jpg)",
      }}
    >
      <Stack
        height="inherit"
        direction="column"
        justifyContent="center"
        gap="45px"
      >
        <Box sx={{ display: "flex", gap: "14px", justifyContent: "center" }}>
          <HeaderTitle variant="h2" sx={{ color: "#00A693" }}>
            خانیما
          </HeaderTitle>
          <HeaderTitle variant="h2">گنجینه اجناس لوکس و آنتیک</HeaderTitle>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "1070px",
            margin: "0 auto",
            gap: "20px",
          }}
        >
          <Stack direction="row" gap="14px">
            <Autocomplete
              id="all-search"
              options={list}
              sx={{ width: "400px" }}
              renderInput={(params) => (
                <TextFieldCustom
                  {...params}
                  direction="rtl"
                  placeholder="جستجو در خانیما"
                  sx={{
                    width: "400px",
                    height: "40px",
                    "& .MuiInputBase-root": {
                      color: "#FFF",
                    },
                  }}
                  InputProps={{
                    ...params.InputLabelProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchOutlinedIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />

            {/* <FormControl sx={{ width: "180px", height: "40px" }}>
              <TextField
                sx={{ width: "180px", height: "40px" }}
                id="outlined-select-currency"
                select
                variant="outlined"
                label="نوع آگهی"
                // value={currency}
                onChange={handleChange}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl> */}

            <FormControl>
              <Button
                id="test"
                aria-haspopup="true"
                aria-controls={open ? "menu-test" : undefined}
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "white" }} />}
                sx={{
                  width: "190px",
                  height: "60px",
                  color: "white",
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                نوع آگهی
              </Button>
              <Menu
                id="menu-test"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                  "aria-labelledby": "test",
                }}
                onClose={handleClose}
                // sx={{ width: "500px" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </FormControl>

            <FormControl sx={{ width: "180px", height: "40px" }}>
              <InputLabel id="ad-type">دسته‌بندی</InputLabel>
              <Select
                labelId="ad-type"
                id="ad-type"
                value={value}
                // label="دسته‌بندی"
                onChange={handleChange}
                sx={{
                  borderRadius: "7px",
                  border: "1px solid white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "180px", height: "40px" }}>
              <InputLabel id="ad-type">استان / شهر</InputLabel>
              <Select
                labelId="ad-type"
                id="ad-type"
                value={value}
                label="استان / شهر"
                onChange={handleChange}
                variant="outlined"
                sx={{
                  borderRadius: "7px",
                  border: "1px solid white",
                  "& .MuiSelect-icon": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{
                width: "40px",
                height: "60px",
                borderRadius: "7px",
              }}
            >
              <SearchOutlinedIcon
                sx={{ width: "28px", height: "28px", color: "black" }}
              />
            </Button>
          </Stack>
          <Box sx={{ alignSelf: "flex-start" }}>
            <FormGroup sx={{ flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { color: "white" },
                    }}
                    defaultChecked
                  />
                }
                label="حجره منتخب"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { color: "white" },
                    }}
                  />
                }
                label="فوری"
              />
            </FormGroup>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
const list = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
