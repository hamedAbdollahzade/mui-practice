import { createTheme } from "@mui/material/styles";

//NOTE : Create Custom Theme :
export const theme = createTheme({
  direction: "rtl",
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#9C27B0",
    // },
    // costumeColor: {
    //   one: "#CFCFCF21",
    // },
  },
  typography: {
    fontFamily: "cursive",
    // fontSize: 23,
  },
});
