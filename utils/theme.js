import { createTheme } from "@mui/material";
import { faIR } from "@mui/material/locale";
const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  direction: "rtl",
  palette: {
    sefid: createColor("#ffffff"),
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
          color: "white",
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
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "yekan",
          fontSize: "14px",
          color: "#00A693",
          fontWeight: 400,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "yekan",
          fontSize: "22px",
          fontWeight: 600,
        },
      },
    },
  },
  faIR: {},
});
export default theme;
