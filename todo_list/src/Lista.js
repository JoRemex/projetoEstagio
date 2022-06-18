// import { dividerClasses } from "@mui/material";
// import React from "react";
// import DataTable from "./Exemplos";

// const Lista = ({ text, lista, listas, setListas }) => {
//   //Events
//   const deleteHandler = () => {
//     setListas(listas.filter((el) => el.id !== lista.id));
//   };
//   const completeHandler = () => {
//     setListas(
//       listas.map((item) => {
//         if (item.id === lista.id) {
//           return { ...item, completed: !item.completed };
//         }
//         return item;
//       })
//     );
//   };
//   return (
//     <div className="todo">
//       <li className={` ${lista.completed ? "completed" : ""}`}>{text}</li>
//       <button className="complete-btn" onClick={completeHandler}>
//         <i>+</i>
//       </button>
//       <button className="trash-btn" onClick={deleteHandler}>
//         <i>apaga</i>
//       </button>
//     </div>
//   );
// };
// export default Lista;
