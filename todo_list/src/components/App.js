import Detail from "../Detail";
import "../styles.css";
import Navbar from "./Navbar";
import { Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TabelaSimples } from "../ResumeTable";
import { TaskForm } from "../TaskForm";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path=""
            element={
              <Stack alignItems="center" spacing={1}>
                <TaskForm />
                <TabelaSimples />
              </Stack>
            }
          />
          <Route path="/detail" element={<Detail thisState={""} />} />
          <Route
            path="/detail/newTodo"
            element={<Detail thisState={"novo"} />}
          />
          <Route
            path="/detail/inProgress"
            element={<Detail thisState={"em andamento"} />}
          />
          <Route path="/detail/done" element={<Detail thisState={"terminado"} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
