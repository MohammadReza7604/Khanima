import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
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
import HistoryIcon from "@mui/icons-material/History";
import {
  AdType,
  CategoryMenuAppBar,
  CityMenuAppBar,
} from "../navigation/Menus";

export const AppBarBanner = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "422px",
    background: "url(/images/app-bar-banner-pic.jpg)",
    [theme.breakpoints.between("xs", "md")]: {
      display: "none",
    },
  }));
  const CustomFormControl = styled(FormControl)(({ theme }) => ({
    width: "180px",
    height: "40px",
    [theme.breakpoints.between("md", "lg")]: {
      // width: "100px",
      // height: "30px",
    },
  }));
  const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: "36px",
    fontWeight: 700,
    color: "white",
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "32px",
    },
  }));
  const CustomAutoComplete = styled(Autocomplete)(({ theme }) => ({
    width: "400px",
    [theme.breakpoints.between("md", "lg")]: {
      width: "330px",
    },
  }));
  const Text = styled(Typography)({
    fontSize: "16px",
    fontWeight: 500,
    opacity: "0.5",
    color: "#282828",
    padding: "20px 50px 20px 10px",
    "&:hover": {
      backgroundColor: "0",
    },
  });
  const TextFieldCustom = styled(TextField)(({ theme }) => ({
    width: "180px",
    height: "40px",
    [theme.breakpoints.between("md", "lg")]: {},
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
    <CustomBox>
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
            width: "1090px",
            margin: "0 auto",
            gap: "20px",
            paddingLeft: { lg: "22px", md: "22px" },
          }}
        >
          <Grid container direction="row" gap="14px">
            <CustomAutoComplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films}
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    padding="5px"
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
                        width: "20px",
                        height: "20px",
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
                  label="جستجو در خانیما"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchOutlinedIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: { xl: "400px", lg: "330px", md: "330px" } }}
                />
              )}
            />

            <CustomFormControl>
              <TextFieldCustom
                id="outlined-select-currency"
                select
                variant="outlined"
                label="نوع آگهی"
                // value={currency}
                onChange={handleChange}
              >
                <AdType />
              </TextFieldCustom>
            </CustomFormControl>

            <CustomFormControl>
              <TextFieldCustom
                id="outlined-select-currency"
                select
                variant="outlined"
                label="دسته‌بندی"
                // value={currency}
                onChange={handleChange}
              >
                <CategoryMenuAppBar />
              </TextFieldCustom>
            </CustomFormControl>

            <CustomFormControl>
              <TextFieldCustom
                id="outlined-select-currency"
                select
                variant="outlined"
                label="استان/شهر"
                // value={currency}
                onChange={handleChange}
              >
                <CityMenuAppBar />
              </TextFieldCustom>
            </CustomFormControl>

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
          </Grid>
          <Box sx={{ alignSelf: "flex-start" }}>
            <FormGroup sx={{ flexDirection: "row" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": { color: "white" },
                    }}
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
    </CustomBox>
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
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
