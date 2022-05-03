import { ThemeProvider } from "@emotion/react";
import React, { Fragment, useEffect } from "react";
import { Stack } from "@mui/material";
import { useState } from "react";
import theme from "../theme";
import "../styles.css";
import { Form } from "../Form";
import TodoList from "../TodoList";
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
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Usado ao inicializar
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //funções
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
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
              <Form
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
              />
            </Fragment>
          }
        />

        <Route
          path="/nao"
          element={
            <DataTable/>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
