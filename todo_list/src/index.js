import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme"
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
        <App />
  </React.StrictMode>,
  document.getElementById("root")
);
