import { ThemeProvider } from "@mui/material";
import { Footer } from "../components/surfaces/Footer";
import theme from "../utils/theme";
import "../styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "../utils/cacheRtl";

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
