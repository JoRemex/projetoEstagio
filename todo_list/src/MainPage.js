import { Stack } from "@mui/material";
import { TabelaSimples } from "./ResumeTable";
import { TaskForm } from "./TaskForm";

export default function MainPage() {
  return (
    <Stack alignItems="center" spacing={1}>
      <TaskForm />
      <TabelaSimples />
    </Stack>
  );
}
