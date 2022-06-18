import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Todo from "./Todo";
import { Stack, TableContainer, TableHead, Button } from "@mui/material";
import Expand from "./Expand";
import { Regista2 } from "./Regista2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "./EditTask"
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function DataTable({ inputText }) {
  const [prior, setPrior] = React.useState("");
  //const deleteHandler = () => {};
  let data = useSelector((store) => store.array);
  if (prior !== "") {
    data = data.filter((row) => row.priority === prior);
  }

  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState("");

  return (
    <>
    <EditTask setOpen={setOpen} edit={edit} open={open}/>
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
                    <IconButton aria-label="delete" size="small">
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
