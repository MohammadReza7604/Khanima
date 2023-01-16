import { ThemeProvider } from "@mui/material";
import { Footer } from "../components/surfaces/Footer";
import theme from "../utils/theme";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "../utils/cacheRtl";
import "../styles/globals.css";
import { HeaderNavbar } from "../components/surfaces/HeaderNavbar";

export default function App({ Component, pageProps }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HeaderNavbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
