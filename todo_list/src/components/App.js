import { ThemeProvider } from "@emotion/react";
import React, { Fragment, useEffect } from "react";
import { Stack } from "@mui/material";
import { useState } from "react";
import theme from "../theme";
import DashBoard from "../DashBoard";
import ToDoPage from "../ToDoPage";
import TodoForm from "../TodoForm";
import { Form } from "../Form";
import TodoList from "../TodoList";
import Navbar from "./Navbar";

function App() {
  //zona dos states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //useEffect
  useEffect(() => {
    filterHandler();
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
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Stack>
        <Navbar/>
          <div>
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
          </div>
        </Stack>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
