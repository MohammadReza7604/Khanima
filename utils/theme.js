import { createTheme } from "@mui/material";

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
          fontFamily: "IRANSans",
          color: "white",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
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
          fontFamily: "IRANSans",
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
          fontSize: "14px",
          color: "#00A693",
          fontWeight: 400,
          borderColor:"white"

        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
          fontSize: "22px",
          fontWeight: 600,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "white",
          },
        },
        root: {
          fontFamily: "IRANSans",
          fontSize: "16px",
          fontWeight: 600,
          color: "white",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
          fontSize: "18px",
          fontWeight: 700,
          color: "#282828",
          textAlign: "center",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiList:{
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
            paddingBottom:"0",
            paddingTop:"0"
        },
      },
    },
    MuiMenuItem:{
      styleOverrides: {
        root: {
          fontFamily: "IRANSans",
          padding:"0"
        },
      },
    }
  },
});
export default theme;
