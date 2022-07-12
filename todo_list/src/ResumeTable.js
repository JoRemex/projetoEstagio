//----abaixo estão os imports da tabela
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function TabelaSimples() {
  let navigate = useNavigate();
  const data = useSelector((store) => store.array);
  let counterDones = 0;
  let counterNews = 0;
  let counterProgress = 0;
  let sub = "20px";
  let num = "70px";
  for (const obj of data) {
    if (obj.state === "terminado") counterDones++;
  }
  for (const obj of data) {
    if (obj.state === "novo") counterNews++;
  }
  for (const obj of data) {
    if (obj.state === "em andamento") counterProgress++;
  }
  return !data.length ? (
    <Stack className="vazio">
      De momento sem Tarefas, adiciona clicando no "+"
    </Stack>
  ) : (
    <>
      <Stack direction="row">
        <Stack
          onClick={() => navigate("/detail/newTodo")}
          className={"card newTodo"}
        >
          <Stack
            spacing={2}
            alignItems="center"
            padding="1rem 5rem"
            maxHeight={100}
            maxWidth={100}
          >
            <Typography margin={-3} align="center" fontSize={num}>
              {counterNews}
            </Typography>
            <Typography align="center" fontSize={sub}>
              Novo
            </Typography>
          </Stack>

          {/* <Checkbox disabled defaultChecked={false} control={<Checkbox />} /> */}
        </Stack>{" "}
        <Stack
          onClick={() => navigate("/detail/inProgress")}
          className={"card inProgress"}
        >
          <Stack
            spacing={2}
            alignItems="center"
            padding="1rem 5rem"
            maxHeight={100}
            maxWidth={100}
            justifyContent="space-between"
          >
            <Typography margin={-3.4} align="center" fontSize={num}>
              {counterProgress}
            </Typography>
            <Typography align="center" fontSize={sub}>
              Em Andamento
            </Typography>
          </Stack>

          {/* <Checkbox disabled defaultChecked={false} control={<Checkbox />} /> */}
        </Stack>{" "}
        <Stack onClick={() => navigate("/detail/done")} className={"card done"}>
          <Stack
            spacing={2}
            alignItems="center"
            padding="1rem 5rem"
            maxHeight={100}
            maxWidth={100}
            justifyContent="space-between"
          >
            <Typography margin={-3} align="center" fontSize={num}>
              {counterDones}
            </Typography>
            <Typography fontSize={sub}>Terminado</Typography>
          </Stack>

          {/* <Checkbox disabled defaultChecked={false} control={<Checkbox />} /> */}
        </Stack>
      </Stack>
    </>
  );
}
