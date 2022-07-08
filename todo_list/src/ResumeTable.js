//----abaixo estão os imports da tabela
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
export function TabelaSimples() {
  const data = useSelector((store) => store.array);
  let counterDones = 0;
  let counterNews = 0;
  let counterProgress = 0;
  for (const obj of data) {
    if (obj.state === "done") counterDones++;
  }
  for (const obj of data) {
    if (obj.state === "newTodo") counterNews++;
  }
  for (const obj of data) {
    if (obj.state === "inProgress") counterProgress++;
  }
  return !data.length ? (
    <Stack className="vazio">
      De momento sem Tarefas, adiciona clicando no "+"
    </Stack>
  ) : (
    <>
      <Grid className="grelha">
        {data.map((row) => (
          <Stack className={"card " + row.priority}>
            <Stack
              spacing={2}
              alignItems="center"
              padding="1rem 5rem"
              maxHeight={100}
              maxWidth={100}
              justifyContent="space-between"
            >
              <Typography
                margin={-1.2}
                align="center"
                variant="h2"
                className="title"
              >
                {row.title}
              </Typography>
              <Typography variant="subtitle2">{row.describe}</Typography>
            </Stack>
            {/* <Checkbox disabled defaultChecked={false} control={<Checkbox />} /> */}
          </Stack>
        ))}
      </Grid>
      <div>{counterDones}</div>
      <div>{counterNews}</div>
      <div>{counterProgress}</div>
    </>
  );
}
