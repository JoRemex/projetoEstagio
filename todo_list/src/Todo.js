import { dividerClasses } from "@mui/material";
import React from "react";
import DataTable from "./Exemplos";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li  className={` ${todo.completed ? "completed": ""}`}>{text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i>+</i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i >apaga</i>
      </button>
    </div>
  );
};
export default Todo;
