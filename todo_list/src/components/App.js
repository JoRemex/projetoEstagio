import { Fragment, useState } from "react";
import DataTable from "../Exemplos";
import { Regista2 } from "../Regista2";
// import RegistaListas from "../RegistaListas";
import "../styles.css";
import Navbar from "./Navbar";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

function App() {
  //zona dos states
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [todos, setTodos] = useState([]);
  const [listas, setListas] = useState([]);
  const [statusRegista, setStatusRegista] = useState("all");
  const [status, setStatus] = useState("all");
  //const [filteredTodos, setFilteredTodos] = useState([]);
  //const [filteredListas, setFilteredListas] = useState([]);


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            <Fragment>
              {/* <RegistaListas
                filteredListas={filteredListas}
                setListas={setListas}
                listas={listas}
              /> */}
              <Regista2
                inputOne={inputOne}
                setInputOne={setInputOne}
                inputTwo={inputTwo}
                setInputTwo={setInputTwo}
                inputPriority={inputPriority}
                listas={listas}
                setListas={setListas}
                setStatusRegista={setStatusRegista}
                setInputPriority={setInputPriority}
              />
            </Fragment>
          }
        />
        <Route path="/nao" element={<DataTable text={inputOne} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
