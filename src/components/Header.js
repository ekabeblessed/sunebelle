import * as React from "react";

import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: "space-between",
    width: "100%",
  },
  tabs: {
    ...theme.typography.tab,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Sun Flower Foundation
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tabs indicatorColor="primary">
              <Tab
                className={classes.tabs}
                disableRipple
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tabs}
                disableRipple
                label="About Us"
                component={Link}
                to="/about"
              />
              <Tab
                className={classes.tabs}
                disableRipple
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
