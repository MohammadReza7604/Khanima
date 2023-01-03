import { createTheme } from "@mui/material";
import { faIR } from "@mui/material/locale";

const theme = createTheme({
  direction: "rtl",
  palette: {
    common: {},
    primary: {
      main: "#00A693",
      light: "#FFF",
    },
    secondary: {
      main: "#FFF",
      light: "#FFF",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#00A693",
          width: "18px",
          height: "18px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "yekan",
          color: "white",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontFamily: "yekan",
          color: "white",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "#00A693" },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "yekan",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "yekan",
        },
      },
    },
  },
  faIR: {},
});
export default theme;
