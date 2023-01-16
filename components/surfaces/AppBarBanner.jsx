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
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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
    },
  });
  const SelectCustom = styled(Select)({
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
    },
  });
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
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
            <FormControl sx={{ width: "180px", height: "40px" }}>
              <InputLabel id="ad-type">نوع آگهی</InputLabel>
              <Select
                labelId="ad-type"
                id="ad-type"
                value={value}
                label="نوع آگهی"
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
              <InputLabel id="ad-type">دسته‌بندی</InputLabel>
              <Select
                labelId="ad-type"
                id="ad-type"
                value={value}
                label="دسته‌بندی"
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
