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
import DialogTitle from "@mui/material/DialogTitle";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTask, removeTask } from "./actions";

export default function RemoveTask({ open, setOpen, id }) {
  const dispatch = useDispatch();
  console.log("edit.id   "+id)
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Editar Tarefa</DialogTitle>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancelar</Button>
        <Button
          onClick={() => {
            dispatch(removeTask(id));
            setOpen(false);
          }}
        >
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
