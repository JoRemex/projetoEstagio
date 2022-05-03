// import {
//   FormControl,
//   Select,
//   MenuItem,
//   Stack,
//   TextareaAutosize,
//   InputLabel,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState, useEffect } from "react";

// function TodoForm() {
//   const [lista, setLista] = useState([]);
//   const [novoItem, setNovoItem] = useState("");

//   useEffect(() => {
//     setLista([]);
//   }, []);

//   return (
//     <>
//       {" "}
//       <Stack
//         direction="row"
//         pt={2}
//         pl={10}
//         pr={10}
//         justifyContent="space-between"
//       >
//         <TextareaAutosize
//           value={novoItem}
//           placeholder="Escreva a toDo"
//           onChange={(value) => setNovoItem(value.target.value)}
//           type="text"
//         />
//         <button onClick={() => addNewItem()}>+</button>
//       </Stack>
//       <ul>
//         {lista.map((item, index) => (
//           <li>
//             {item} <button onClick={() => updateItem(index)}>edit</button>
//             <button onClick={() => deleteItem(index)}>-</button>
//             <FormControl size="small">
//               {" "}
//               <Select
//                 labelId="demo-simple-select-autowidth-label"
//                 id="demo-simple-select-autowidth"
//                 autoWidth
//                 label="Age"
//               >
//                 <InputLabel id="demo-controlled-open-select-label">
//                   Grau de importância
//                 </InputLabel>
//                 <MenuItem value=""></MenuItem>
//                 <MenuItem>Baixo</MenuItem>
//                 <MenuItem>Médio</MenuItem>
//                 <MenuItem>Elevado</MenuItem>
//               </Select>
//             </FormControl>
//           </li>
//         ))}
//       </ul>
//     </>
//   );

//   function addNewItem() {
//     if (novoItem.length <= 0) {
//       alert("Campo de escrita vazio");
//     } else {
//       setLista([...lista, novoItem]);
//       setNovoItem("");
//     }
//   }
//   function updateItem(index) {}
//   function deleteItem(index) {
//     const tmpArray = [...lista];
//     tmpArray.splice(index, 1);
//     setLista(tmpArray);
//   }
// }
// export default TodoForm;
