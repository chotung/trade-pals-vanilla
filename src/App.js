import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./containers/Main";
import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import PetPage from "./containers/PetPage";
import Home from "./containers/Home"
import Footer from "./containers/Footer"

// import { connect } from "react-redux"

// const mapStateToProps = state => {
//   return {
//     pets: state.pets,
//     cart: state.shoppingCart
//   }
// }

// const App = (props) => {
const App = () => {
  // console.log(props);
  return (
    <Router>
      <Navbar className="trade-pals-header" bg="light" expand="lg">
        <Link className="home" to="/">
          Trade Pals
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link className="index-pet" to="/index/pets">All Pets</Link>
          <Nav className="mr-auto"></Nav>
          <Link className="cart" to="/shoppingcart">
            <Button className="mr-sm-2" variant="outline-success">
              Cart
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/index/pets">
          <Main />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route path="/petpage">
          <PetPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
};

// export default connect(mapStateToProps)(App);
export default App;
