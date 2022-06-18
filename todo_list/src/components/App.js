import { ThemeProvider } from "@emotion/react";
import React, { Fragment, useEffect } from "react";
import { Stack } from "@mui/material";
import { useState } from "react";
import theme from "../theme";
import "../styles.css";
import { Form } from "../Form";
import { Regista2 } from "../Regista2";
import TodoList from "../TodoList";
import RegistaListas from "../RegistaListas";
import Navbar from "./Navbar";
import DataTable from "../Exemplos";

import {
  HashRouter as Router,
  Switch,
  useNavigate,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

function App() {
  //zona dos states
  const [inputText, setInputText] = useState("");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [todos, setTodos] = useState([]);
  const [listas, setListas] = useState([]);
  const [statusRegista, setStatusRegista] = useState("all");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filteredListas, setFilteredListas] = useState([]);

  //Usado ao inicializar
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);
  // //useEffect
  // useEffect(() => {
  //   filterHandler();
  //   saveLocalTodos();
  // }, [todos, status]);
  //funções
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(listas.filter((lista) => lista.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(listas.filter((lista) => lista.completed === false));
        break;
      default:
        setFilteredTodos(listas);
        break;
    }
  };
  //Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("listas", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("listas") === null) {
      localStorage.setItem("listas", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setListas(todoLocal);
    }
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            <Fragment>
              {/* <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
              />

              <TodoList
                filteredTodos={filteredTodos}
                setTodos={setTodos}
                todos={todos}
              /> */}
              <RegistaListas
                filteredListas={filteredListas}
                setListas={setListas}
                listas={listas}
              />
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
              {/* <RegistaListas
                filteredListas={filteredListas}
                setListas={setFilteredListas}
                listas={listas}
              /> */}
            </Fragment>
          }
        />

        <Route path="/nao" element={<DataTable text={inputOne} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
