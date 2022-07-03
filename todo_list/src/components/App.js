import Detail from "../Detail";
import MainPage from "../MainPage";
import "../styles.css";
import Navbar from "./Navbar";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
