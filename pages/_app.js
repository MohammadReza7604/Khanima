import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { Footer } from "../components/surfaces/Footer";
import "../styles/globals.css";
import { cacheRtl } from "../utils/cacheRtl";
import theme from "../utils/theme";

export default function App({ Component, pageProps }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
