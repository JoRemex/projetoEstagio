import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box, Button, FormControl,
  InputLabel,
  MenuItem,
  Select, Stack, TableContainer, TableHead
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import EditTask from "./EditTask";
import RemoveTask from "./RemoveTask";

export default function DataTable({ inputText }) {
  const [prior, setPrior] = React.useState("");
  //const deleteHandler = () => {};
  let data = useSelector((store) => store.array);
  if (prior !== "") {
    data = data.filter((row) => row.priority === prior);
  }

  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState("");
  const [sOpen, setSopen] = React.useState(false);
  const [sEdit, setSedit] = React.useState("");

  return (
    <>
      <EditTask setOpen={setOpen} edit={edit} open={open} />
      <RemoveTask setOpen={setSopen} open={sOpen} id={sEdit} />
      <Stack alignItems="center">
        <Stack direction="row" spacing={1}>
          <Box alignItems="center" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={prior}
                label="prior"
                onChange={(event) => {
                  setPrior(event.target.value);
                }}
              >
                <MenuItem value={"baixa"}>Baixa</MenuItem>
                <MenuItem value={"média"}>Média</MenuItem>
                <MenuItem value={"alta"}>Alta</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" onClick={() => setPrior("")}>
            limpa
          </Button>
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Título</TableCell>
                <TableCell align="center">Descrição</TableCell>
                <TableCell align="center">Prioridade</TableCell>
                <TableCell align="center">Data</TableCell>
                <TableCell align="center"></TableCell>
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
                  <TableCell align="center">{row.describe}</TableCell>
                  <TableCell align="center">{row.priority}</TableCell>
                  <TableCell align="center">{row.date.toUTCString()}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => {
                        setOpen(true);
                        setEdit(row);
                      }}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setSopen(true);
                        setSedit(row.id)
                      }}
                      aria-label="delete"
                      size="small"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
