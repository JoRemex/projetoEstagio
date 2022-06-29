import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
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
                <IconButton size="large" edge="start" disabled color="inherit">
                  <NoteAltIcon />
                </IconButton>
              </Stack>
              <Stack direction="row">
                <IconButton
                  size="large"
                  disabled
                  color="warning"
                  sx={{ mr: 1 }}
                >
                  <DarkModeIcon />
                </IconButton>
                <IconButton size="large" disabled edge="start" color="inherit">
                  <LogoutIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Stack>
  );
}
export default Navbar;
