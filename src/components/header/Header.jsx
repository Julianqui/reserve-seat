import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  return (
    <Container component={Paper} elevation={5} maxWidth="xl" className="topBar">
      <CssBaseline />
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 ,fontFamily: 'Unbounded'}} >
          Hornero
        </Typography>
        <nav>
          <IconButton size="small" sx={{ ml: 2 }} aria-haspopup="true">
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="text" {...bindTrigger(popupState)}>
                    <MenuIcon />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
                    <MenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/reservations")}>
                      My Reservations
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </IconButton>
        </nav>
      </Toolbar>
    </Container>
  );
};

export default Header;
