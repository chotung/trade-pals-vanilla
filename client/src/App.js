import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Main from "./containers/Main";
// import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
import { Navbar, Nav, Button, Row } from "react-bootstrap";
// import PetPage from "./containers/PetPage";
import Home from "./containers/Home"
import Footer from "./containers/Footer"
import { connect } from "react-redux"
import {
  getYelpDataError,
  getYelpData,
  getYelpDataPending
} from "./config/reducers/apiReducer/yelpReducer";

import { bindActionCreators } from 'redux'
import fetchYelp from './config/apis/fetchYelp'
import UserLocationForm from "./components/UserLocationForm";
import Login from "./components/Login";
import Register from "./components/Register";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      home: true
    };

    // this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }
  // ====================================
  // Life Cycle methods
  componentDidMount() {
    // const { fetchYelp } = this.props;
    this.geoLocate();

    // When do I fire off this function???
  }

  // ====================================
  // Class methods

  // shouldComponentRender() {
  //   // const { pending } = this.props;
  //   if (this.pending === false) return false;
  //   // more tests
  //   return true;
  // }
  footerRender = (e) => {
    // console.log(e.target)
    // if(e.target)
    this.setState(prevState => ({
      home: false
    }))
    // console.log(this.state)

  }
  renderHomeFooter = () => {
    this.setState(prevState => ({
      home: true
    }))
  }
  


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

  render() {

    // const { user } = this.props
    return (
      <Router>
        <header>
          <Navbar className="trade-pals-header" bg="light" expand="lg">
            <Link onClick={this.renderHomeFooter} className="home" to="/">
              Trade Pals
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Link className="index-pet" to="/index/pets">
                All Pets
              </Link> */}
              <Nav className="mr-auto"></Nav>
              <Row onClick={this.footerRender} className="authentication-link">
                <Link to="/login">
                  <Login />
                </Link>
                <Link to="/register">
                  <Register />
                </Link>
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
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
          <Route path="/petpage">
            <PetPage />
          </Route> */}

          <Route path="/login">Login Form</Route>
          <Route path="/register">sign up form</Route>
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
        {this.state.home === false ? <Footer absFoot={"show"} /> : null}
      </Router>
    );
  }
};

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
