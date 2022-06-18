// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// function createData(title, describe, priority, date) {
//   return { title, describe, priority, date };
// }

// const rows = [
//   createData("Título1", "descriçao1", 6.0, 24),
//   createData("Título2", "descriçao2", 9.0, 37),
//   createData("Eclair", 262, 16.0, 24),
//   createData("Cupcake", 305, 3.7, 67),
//   createData("Gingerbread", 356, 16.0, 49),
// ];

//  function DenseTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Título</TableCell>
//             <TableCell align="center">Descrição</TableCell>
//             <TableCell align="center">Prioridade</TableCell>
//             <TableCell align="center">Data</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.title}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.title}
//               </TableCell>
//               <TableCell align="center">{row.describe}</TableCell>
//               <TableCell align="center">{row.priority}</TableCell>
//               <TableCell align="center">{row.date}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
