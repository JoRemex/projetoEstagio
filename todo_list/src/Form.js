import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import { Regista2 } from "./Regista2";
export const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
}) => {
  //

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Fragment>
      <Stack mt={-10}>
        <form className="form">
          <input
            className="todo-input"
            value={inputText}
            onChange={inputTextHandler}
            type="text"
          />
          <button
            className="todo-button"
            onClick={submitTodoHandler}
            type="submit"
          >
            +
          </button>
          <div className="select">
            <select
              className="filter-todo"
              onChange={statusHandler}
              name="todos"
            >
              <option>all</option>
              <option>completed</option>
              <option>uncompleted</option>
            </select>
          </div>
        </form>
      </Stack>
    </Fragment>
  );
};
