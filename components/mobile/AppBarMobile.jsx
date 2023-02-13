import React from "react";
import {
  AppBar,
  Autocomplete,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HistoryIcon from "@mui/icons-material/History";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { Box } from "@mui/system";

export const AppBarMobile = () => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "15px",
    },
  }));
  const Text = styled(Typography)({
    fontSize: "10px",
    fontWeight: 500,
    opacity: "0.5",
    color: "#282828",
    padding: "20px 50px 20px 10px",
    "&:hover": {
      backgroundColor: "0",
    },
  });
  const TextFieldCustom = styled(TextField)(({ theme }) => ({
    input: {
      "&::placeholder": {
        fontSize: "12px",
      },
    },
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
  }));
  return (
    <AppBar position="absolute" sx={{ backgroundColor: "#131313" }}>
      <CustomGrid container direction="row">
        <Autocomplete
          freeSolo
          id="free-solo"
          disableClearable
          options={top100Films}
          getOptionLabel={(option) => option.title}
          sx={{ width: "200px" }}
          renderOption={(props, option) => (
            <>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.10)",
                  },
                }}
              >
                <Text {...props} xs={10}>
                  {option.title}
                </Text>
                <HistoryIcon
                  xs={2}
                  sx={{
                    width: "14px",
                    height: "14px",
                    color: "#282828",
                    opacity: "0.5",
                  }}
                />
              </Grid>
              <Divider sx={{ borderWidth: "1px" }} />
            </>
          )}
          renderInput={(params) => (
            <TextFieldCustom
              {...params}
              placeholder="جستجو در خانیما"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlinedIcon
                      sx={{ width: "14px", height: "14px", color: "white" }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          padding="0 10px"
          sm={4}
          xs={4}
        >
          <Typography color="#00A693">Khanima</Typography>
          <IconButton>
            <ManageAccountsRoundedIcon
              sx={{ width: "18px", height: "18px", color: "white" }}
            />
          </IconButton>
        </Grid>
      </CustomGrid>
    </AppBar>
  );
};
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
];
