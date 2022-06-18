import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
