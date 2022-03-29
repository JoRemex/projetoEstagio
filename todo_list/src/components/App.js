import { ThemeProvider } from "@emotion/react";
import React, { Fragment } from "react";
import { Stack } from "@mui/material";
import theme from "../theme";
import DashBoard from "../DashBoard";
import ToDoPage from "../ToDoPage";
import TodoForm from "../TodoForm";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Stack>
          <DashBoard />
        </Stack>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
