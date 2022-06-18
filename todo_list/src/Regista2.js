import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { Fragment } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
//----abaixo estão os imports da tabela
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, changeIt, array } from "./actions";

function DenseTable() {
  const data = useSelector((store) => store.array);
  console.log(data);
  return (
    <TableContainer component={Paper}>
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
//---------------------------------------------------------------------------------------------------------
export const Regista2 = ({
  setInputTextRegista,
  setInputOne,
  setInputTwo,
  inputTwo,
  listas,
  setListas,
  inputOne,
  setStatus,
}) => {
  //

  const inputFirstHandler = (event) => {
    setInputOne(event.target.value);
  };
  const inputSecondHandler = (event) => {
    setInputTwo(event.target.value);
  };
  const data = listas;
  // const submitListasHandler = (e) => {
  //   e.preventDefault();
  //   setListas([
  //     ...listas,
  //     {
  //       title: inputOne,
  //       text: inputTwo,
  //       priority: prior,
  //       date: inputDate.toUTCString(),
  //     },
  //   ]);
  //   setInputOne("");
  //   setInputTwo("");
  //   setPrior("");
  // };

  //--------------------------------------------------------------------------------------------------------------------

  //data e hora---------------------------------------------------------------------------------------------------------
  const [inputDate, setInputDate] = React.useState(new Date());
  //console.log(inputDate.toUTCString() + "    cnslog da data");

  const handleChange = (newValue) => {
    setInputDate(newValue);
    console.log(newValue);
  };
  //--------------------------------------------------------------------------------------------------------------------

  const [prior, setPrior] = React.useState("");

  const newHandleChange = (event) => {
    setPrior(event.target.value);
  };
  //
  function createData(title, text, priority, date) {
    return { title, text, priority, date };
  }
  //("Marca: " + elemento.title + " - modelo: " + elemento.text);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Stack mt={-10}>
        <Stack className="form">
          <input value={inputOne} onChange={inputFirstHandler} type="text" />
          <input
            className="todo-input"
            value={inputTwo}
            onChange={inputSecondHandler}
            type="text"
          />
          <button
            className="todo-button"
            onClick={() => {
              if (inputOne !== "" && inputTwo !== "" && prior !== "") {
                dispatch(
                  array({
                    title: inputOne,
                    describe: inputTwo,
                    priority: prior,
                    date: inputDate,
                  })
                );
                setInputOne("");
                setInputTwo("");
              }
            }}
            type="submit"
          >
            +
          </button>
        </Stack>
        <Stack marginLeft="40%" marginTop={1}>
          <Box alignItems="center" sx={{ maxWidth: 120 }}>
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
        </Stack>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3} m={1}>
            <MobileDatePicker
              label="Date "
              inputFormat="MM/dd/yyyy"
              inputDate={inputDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Stack>
      <DenseTable />
    </Fragment>
  );
};
