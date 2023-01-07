import { ThemeProvider } from "@mui/material";
import { Footer } from "../components/surfaces/Footer";
import theme from "../utils/theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
