import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./containers/Main";
import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import PetPage from "./containers/PetPage";
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




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    // const { fetchYelp } = this.props;
    this.geoLocate();

    // When do I fire off this function???
  }

  shouldComponentRender() {
    // const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
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
    })

    // console.log("updating location")
  };
  submit = e => {
    e.preventDefault();
    // Updates the location with new location
    console.log("submits");
  };

  render() {
    // const { user } = this.props
    return (
      <Router>
        <header>
          <Navbar className="trade-pals-header" bg="light" expand="lg">
            <Link className="home" to="/">
              Trade Pals
            </Link>

            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Link className="index-pet" to="/index/pets">
                All Pets
              </Link>
              <Nav className="mr-auto"></Nav>
              <Link className="cart" to="/shoppingcart">
                <Button className="mr-sm-2" variant="outline-success">
                  Cart
                </Button>
              </Link>
            </Navbar.Collapse> */}
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
          <Route path="/">
            <div className="m-0 contento">
              <UserLocationForm value={this.state.value} updateLocation={this.updateLocation} submit={this.submit} />
              <Home />
              <Footer />
            </div>
          </Route>
        </Switch>
        {<Footer />}
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
