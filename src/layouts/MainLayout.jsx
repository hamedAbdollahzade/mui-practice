import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { theme } from "./themes/mainTheme/theme";
import { Grid2 as Grid } from "@mui/material";
import Header from "../components/Header";

// NOTE : Create RTL Cache :
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin],
});

// This is HOC Components :
const MainLayout = ({ children }) => {
  // Default breakpoints :
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px

  return (
    <>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRTL}>
          {/* <Header /> */}
          {/* Grid System */}
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
