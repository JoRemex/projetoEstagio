import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

export default function EditTask({ open, setOpen, edit }) {
  const [title, setTitle] = React.useState(edit.title);
  const [describe, setDescribe] = React.useState(edit.describe);
  const [priority, setPriority] = React.useState(edit.priority);
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
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancelar</Button>
        <Button>Editar</Button>
      </DialogActions>
    </Dialog>
  );
}
