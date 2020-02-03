import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Main from "./containers/Main";
import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
import { Navbar, Nav, Button, Row } from "react-bootstrap";
// import PetPage from "./containers/PetPage";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import { connect } from "react-redux";
import {
  getYelpDataError,
  getYelpData,
  getYelpDataPending
} from "./config/reducers/apiReducer/yelpReducer";

import { bindActionCreators } from "redux";
import fetchYelp from "./config/apis/fetchYelp";
import UserLocationForm from "./components/UserLocationForm";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

  }
  // ====================================
  // Life Cycle methods
  componentDidMount() {
    // const { fetchYelp } = this.props;
    this.geoLocate();
    // console.log(sessionStorage.getItem)
    // When do I fire off this function???
  }

  // ====================================
  // Class methods

  geoLocate = () => {
    const { fetchYelp } = this.props;

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = function(pos) {
      const crd = pos.coords;
      fetchYelp(crd);
    };

    const error = function(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  // should show if im logg
  updateLocation = e => {
    let input = e.target.value;
    this.setState({
      value: input
    });

    // console.log("updating location")
  };
  submit = e => {
    e.preventDefault();
    // Updates the location with new location
    // Google needs to know about location for the MAP
    // Yelp needs to know the location for animal shelters
    console.log("submits");
  };

  footerChange = () => {
    const relPath = window.location.pathname;

    if (relPath === "/") {
      console.log("at home");
      this.setState({
        footShow: true
      });
    } else {
      this.setState({
        footShow: false
      });
    }
  };

  render() {
    const relPath = window.location.pathname;
    // console.log("relative path" ,relPath)
    // console.log(this.state.footShow);
    // const { user } = this.props
    return (
      <Router>
        <header>
          <Navbar className="trade-pals-header" bg="light" expand="lg">
            <Link onClick={this.renderHomeFooter} className="home" to="/">
              Trade Pals
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-na" className="mobile-nav">
              {/* <Link className="index-pet" to="/index/pets">
                All Pets
              </Link> */}
              <Nav className="mr-auto"></Nav>
              <Row onClick={this.footerRender} className="authentication-link">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link className="cart" to="/shoppingcart">
                  <Button className="mr-sm-2" variant="outline-success">
                    Cart
                  </Button>
                </Link>
              </Row>
            </Navbar.Collapse>
          </Navbar>
        </header>

        <Switch>
          {/* <Route path="/index/pets">
            {this.props.user.location ? <Main /> : <div>false</div>}
          </Route> */}
          <Route path="/shoppingcart">
            <ShoppingCart />
            <Footer/>
          </Route>
          {/* <Route path="/petpage">
            <PetPage />
          </Route> */}

          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <Register />
            <Footer />
          </Route>
          <Route path="/">
            <div className="m-0 contento">
              <UserLocationForm
                value={this.state.value}
                updateLocation={this.updateLocation}
                submit={this.submit}
              />
              <Home />
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  error: getYelpDataError(state),
  businesses: getYelpData(state),
  pending: getYelpDataPending(state),
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchYelp: fetchYelp
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

/**
 * <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
 */
