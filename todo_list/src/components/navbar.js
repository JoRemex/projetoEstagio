import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { AppBar, Badge, IconButton, Stack, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();
  const data = useSelector((store) => store.array);

  return (
    <Stack className="navbar">
      <Box display="flex">
        <AppBar>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flex={1}
            >
              <Stack direction="row">
                <IconButton
                  onClick={() => navigate("/")}
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  <DashboardIcon />
                </IconButton>
                <IconButton
                  onClick={() => navigate("/detail")}
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 1 }}
                >
                  <ListAltIcon />
                </IconButton>
                <Stack justifyContent="center">
                  <Badge badgeContent={data.length} color="error">
                    <AssignmentIcon color="action" />
                  </Badge>
                </Stack>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
}
