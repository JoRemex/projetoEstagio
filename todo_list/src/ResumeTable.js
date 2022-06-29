//----abaixo estão os imports da tabela
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
export function TabelaSimples() {
  const data = useSelector((store) => store.array);
  return (
    <TableContainer component={Paper} className="tabela">
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Título</TableCell>
            <TableCell align="center">Prioridade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            
            <TableRow
              key={row.length}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }} //apagar esta linha
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
