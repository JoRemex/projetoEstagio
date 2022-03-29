import { Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "./styles.css";
import { Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import TodoForm from "./TodoForm";

function Home() {
  return (
    <Stack alignItems="center">
      <Stack direction="row" p={15}>
        <Stack alignItems="center">
          <Stack className="mainSquare" m={1} borderRadius={2}>
            {/* <Typography pt={3} pl={5}>
              toDo1 <Checkbox color="danger" size="small" />
              <EditIcon size="small" />
              <CancelIcon size="small" />
            </Typography>
            <Typography pl={5}>
              toDo2 <Checkbox color="secondary" size="small" />
              <EditIcon size="small" />
              <CancelIcon size="small" />
            </Typography>
            <Typography pl={5}>
              toDo3 <Checkbox size="small" />
              <EditIcon size="small" />
              <CancelIcon size="small" />
            </Typography> */}
            <TodoForm/>
          </Stack>
        </Stack>
        <Stack justifyContent="space-between" flex={1}>
         
          <Stack className="notes" m={1} borderRadius={2}>
            <Typography variant="body1" p={1}>
              Algumas notas...
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
