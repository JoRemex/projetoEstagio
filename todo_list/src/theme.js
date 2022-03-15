import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#335559",
    },
    secondary: {
      light: "#0066ff",
      main: "#000000",
    },
    danger:{
      main:"#d13452"
    }
  },
});
export default theme;
