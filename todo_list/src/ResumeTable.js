//----abaixo estão os imports da tabela
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
export function TabelaSimples() {
  const data = useSelector((store) => store.array);
  return !data.length ? (
    <Stack className="vazio">
      De momento sem Tarefas, adiciona clicando no "+"
    </Stack>
  ) : (
    <Grid className="grelha">
      {data.map((row) => (
        <Stack className={"card " + row.priority}>
          <Stack
            spacing={2}
            className="cartao"
            alignItems="center"
            justifyContent="space-between"
            padding="1rem 5rem"
            maxHeight={40}
            maxWidth={60}
          >
            <Stack className="title">{row.title}</Stack>
            <Stack>{row.describe}</Stack>
          </Stack>
        </Stack>
      ))}
    </Grid>
  );
  //    <Grid className="grelha">
  // </Grid>
}
