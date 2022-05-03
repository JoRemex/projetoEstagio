import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Todo from "./Todo";
import { Stack } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 10 },
  { field: "titulo", headerName: "Título", width: 70 },
  { field: "spec", headerName: "Especificação", width: 130 },
  {
    field: "data",
    headerName: "Data",
    type: "data",
    width: 94,
  },
  {
    field: "fullName",
    headerName: "Prioridade",
    description: "This column has a value getter and is not sortable.",
    width: 120,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.toDo || ""}`,
  },
];

const rows = [
  {
    id: 1,
    toDo: "alta",
    spec: "finalização",
    data: "12-06-2022",
    titulo: "todo1",
  },
  {
    id: 2,
    toDo: "baixa",
    spec: "apresentação",
    data: "21-05-2022",
    titulo: "todo2",
  },
  {
    id: 3,
    toDo: "media",
    spec: "exemplo",
    data: "24-05-2022",
    titulo: "todo",
  },
];

export default function DataTable() {
  return (
    <Stack alignItems="center">
      <div style={{ height: 400, width: "50%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Stack>
  );
}
