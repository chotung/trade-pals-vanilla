import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./containers/Main";
import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Link className="home" to="/">
              <Typography variant="h6" className={classes.title}>
                Trade Pals
              </Typography>
            </Link>

            <Link className="cart" to="/shoppingcart">
              <Button color="inherit">Cart</Button>
            </Link>
          </Toolbar>
        </AppBar>
        {/* Order matters */}
        <Switch>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        {/* </div> */}
      </Router>
    </div>
  );
};

export default App;
