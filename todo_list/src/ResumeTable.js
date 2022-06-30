//----abaixo estão os imports da tabela
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
export function TabelaSimples() {
  const data = useSelector((store) => store.array);
  return (
    <>
      <Grid className="grelha">
        {!data.length ? (
          <div className="vazio">De momento não tem nenhuma toDo</div>
        ) : (
          data.map((row) => (
            <Stack className={row.priority}>
              <Stack
                spacing={2}
                className="cartao"
                alignItems="center"
                justifyContent="space-between"
                padding="1rem 5rem"
              >
                <Stack paddingTop="0px">{row.title}</Stack>
                <Stack alignItems="center" justifyContent="center">
                  {row.describe}
                </Stack>
              </Stack>
            </Stack>
          ))
        )}
      </Grid>
    </>
  );
}
