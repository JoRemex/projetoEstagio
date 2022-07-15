import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "./actions";

export default function EditTask({ open, setOpen, edit }) {
  const [title, setTitle] = useState(edit.title);
  const [describe, setDescribe] = useState(edit.describe);
  const [priority, setPriority] = useState(edit.priority);
  const [state, setState] = useState(edit.state);
  const dispatch = useDispatch();
  useEffect(() => {
    setTitle(edit.title);
    setDescribe(edit.describe);
    setPriority(edit.priority);
    setState(edit.state);
  }, [edit]);
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Editar Tarefa</DialogTitle>
      <DialogContent>
        <Stack p={2} spacing={3}>
          <TextField
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            label="Título"
          />
          <TextField
            value={describe}
            onChange={(e) => {
              setDescribe(e.target.value);
              // console.log(e);
            }}
            label="Descrição"
          />
          <Box alignItems="center" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="prior"
                value={priority}
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                <MenuItem value={"baixa"}>Baixa</MenuItem>
                <MenuItem value={"média"}>Média</MenuItem>
                <MenuItem value={"alta"}>Alta</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box alignItems="center" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="prior"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
              >
                <MenuItem value={"novo"}>Novo</MenuItem>
                <MenuItem value={"em andamento"}>Em andamento</MenuItem>
                <MenuItem value={"terminado"}>Terminado</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancelar</Button>
        <Button
          onClick={() => {
            dispatch(
              editTask({
                id: edit.id,
                title: title,
                describe: describe,
                priority: priority,
                state: state,
              })
            );
            setOpen(false);
          }}
        >
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
