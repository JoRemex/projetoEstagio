import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import React from "react";
//----abaixo estão os imports da tabela
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { array } from "./actions";
import { DesktopDatePicker } from "@mui/lab";

//---------------------------------------------------------------------------------------------------------
export const TaskForm = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  //data e hora---------------------------------------------------------------------------------------------------------
  const [inputDate, setInputDate] = useState(new Date());
  //console.log(inputDate.toUTCString() + "    cnslog da data");
  const handleChange = (newValue) => {
    setInputDate(newValue);
  };
  const [prior, setPrior] = useState("");
  const newHandleChange = (event) => {
    setPrior(event.target.value);
  };
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // ----------------------------------------------------------------------------------------------------------------
  return (
    <Stack direction="row">
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={inputOne}
            label="Título"
            type="text"
            onChange={(e) => {
              setInputOne(e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="asd"
            value={inputTwo}
            label="Descrição"
            onChange={(e) => {
              setInputTwo(e.target.value);
            }}
            fullWidth
            variant="outlined"
            type="text"
          />
          <Box alignItems="center" sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={prior}
                label="prior"
                onChange={newHandleChange}
              >
                <MenuItem value={"baixa"}>Baixa</MenuItem>
                <MenuItem value={"média"}>Média</MenuItem>
                <MenuItem value={"alta"}>Alta</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Stack justifyContent="center" alignItems="center">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="dd/MM/yyyy"
                value={inputDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              if (inputOne !== "" && inputTwo !== "" && prior !== "") {
                dispatch(
                  array({
                    id: uuid(),
                    title: inputOne,
                    describe: inputTwo,
                    priority: prior,
                    date: inputDate,
                  })
                );
                setInputOne("");
                setInputTwo("");
              }
              handleClose();
            }}
          >
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
