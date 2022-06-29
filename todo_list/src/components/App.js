import Detail from "../Detail";
import MainPage from "../MainPage";
import "../styles.css";
import Navbar from "./Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
