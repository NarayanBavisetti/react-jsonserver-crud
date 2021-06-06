import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});
export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <NavLink className={classes.tabs} to="/" exact>
            Home
          </NavLink>
          <NavLink className={classes.tabs} to="/add" exact>
            Add Users
          </NavLink>
          <NavLink className={classes.tabs} to="/list" exact>
            Users
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
