import { Button, Stack, Toolbar, Typography } from "@mui/material";
import React, { Fragment } from "react";
import "./styles.css";

function Home() {
  return (
    <Stack alignItems="center">
      <Stack direction="row" p={15}>
        <Stack alignItems="center">
          <Stack className="mainSquare" m={1} borderRadius={2}></Stack>
        </Stack>
        <Stack justifyContent="space-between" flex={1}>
          <Stack className="calendar" m={1} borderRadius={2}>
            <Typography variant="h1" align="center">
              1
            </Typography>
            <Typography variant="h3" align="center">
              Março
            </Typography>
          </Stack>
          <Stack className="notes" m={1} borderRadius={2}>
            <Typography variant="body1" p={1} >
              Algumas notas...
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
