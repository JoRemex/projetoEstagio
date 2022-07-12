import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#335559",
    },
    secondary: {
      light: "#0066ff",
      main: "#000000",
    },
    danger: {
      main: "#d13452",
    },
  },
});
export default theme;
