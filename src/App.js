import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./containers/Main";
import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
import {
  // Container,
  // Row,
  // Col,
  Navbar,
  Nav,
  // NavDropdown,
  Button
} from "react-bootstrap";

const App = () => {
  return (
      <Router>
        <Navbar className="trade-pals-header" bg="light" expand="lg">
            <Link className="home" to="/">
              Trade Pals
            </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Button className="mr-sm-2" variant="outline-success">
              <Link className="cart" to="/shoppingcart">
                Cart
              </Link>
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
  );
};

export default App;






// </Container>
    // <div className="app">
    //   <Router>
    //     <Link className="home" to="/">
    //       Trade Pals
    //     </Link>

    //     <Link className="cart" to="/shoppingcart">
    //       <button color="inherit">Cart</button>
    //     </Link>
    //     <Switch>
    //       <Route path="/shoppingcart">
    //         <ShoppingCart />
    //       </Route>
    //       <Route path="/">
    //         <Main />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>