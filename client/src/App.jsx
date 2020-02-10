// DEPENDENCIES
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, Button, Row } from "react-bootstrap";
// REDUX
import { bindActionCreators } from "redux";
import fetchYelp from "./config/apis/fetchYelp";
import { createUser, loginUser, logoutUser } from "./config/apis/fetchUser";
import {
  getYelpDataError,
  getYelpData,
  getYelpDataPending
} from "./config/reducers/apiReducer/yelpReducer";
// COMPONENTS
import UserContainer from "./containers/UserContainer"
// import Main from "./containers/Main";
import ShoppingCart from "./containers/ShoppingCart";
import "./styles/App.css";
// import PetPage from "./containers/PetPage";
import Home from "./containers/Home";
import Footer from "./containers/Footer";



import UserLocationForm from "./components/UserLocationForm";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        password: ""
      },
      register: {
        email: "",
        password: "",
        name: ""
      }
    };

  }
  // ====================================
  // Life Cycle methods
  componentDidMount() {
    const {loginUser} = this.props
    // this.geoLocate();
    const ses = sessionStorage.getItem("User")
    const parsedSes = JSON.parse(ses)

    if(ses) {
      loginUser(parsedSes) 
    } 
    // LOGOUT THE USER FROM REDUX
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
  };

  submit = e => {
    // WHEN SUBMIT VALIDATE THE PASSWORD
    const { createUser, loginUser } = this.props
    const loginInfo = this.state.login
    const registerInfo = this.state.register
    e.preventDefault();

    const btnType = e.target.children[1].dataset.type;
    // TAKES THE INFO AND SEND IT BACK POST REQUEST
    if(btnType === "register") {
      // DO API CALL FOR REGISTER ROUTE
      // DO CHECKS TO MAKE SURE IT'S NOT EMPTY WHEN THEY SUBMIT
      createUser(registerInfo)
    } else {
      loginUser(loginInfo)
      // DO API CALL FOR LOGIN ROUTE
      // DO CHECKS TO MAKE SURE IT'S NOT EMPTY WHEN THEY SUBMIT
    }

    // CONVERT INTO A SWITCH STATEMENT BASED OFF BTNTYPE -- LOGOUT BUTTON

    // Updates the location with new location
    // Google needs to know about location for the MAP
    // Yelp needs to know the location for animal shelters
  };

  formValueUpdate = (e) => {
    // console.log(e.target)
    const relPath = window.location.pathname;
    const { value, name,  } = e.target
    // console.log(value, name, relPath)
    if(relPath === "/login") {
      switch (name) {
        case "email":
           this.setState(prevState => ({
             login: {
               password: prevState.login.password,
               email: value
             }
           }));
          break
        case "password":
           this.setState(prevState => ({
             login: {
               password: value,
               email: prevState.login.email
             }
           }));
          break
        default:
          break
      }
    } else if(relPath === "/register") {
      switch (name) {
        case "email":
          this.setState(prevState => ({
            register: {
              password: prevState.register.password,
              name: prevState.register.name,
              email: value
            }
          }));
          break;
        case "password":
          this.setState(prevState => ({
            register: {
              name: prevState.register.name,
              password: value,
              email: prevState.register.email
            }
          }));
          break;
        case "name":
          this.setState(prevState => ({
            register: {
              name: value,
              password: prevState.register.password,
              email: prevState.register.email
            }
          }));
          break
        default:
          break;
      }
    }
  }


  footerChange = () => {
    const relPath = window.location.pathname;
    if (relPath === "/") {
      this.setState({
        footShow: true
      });
    } else {
      this.setState({
        footShow: false
      });
    }
  };

  logout = () => {
    const logoutFunc = this.props.logoutUser
    const userSess = JSON.parse(sessionStorage.getItem("User"))
    logoutFunc(userSess)
  }

  render() {
    const { formValueUpdate, submit, logout } = this
    const { login, register } = this.state
    const { name } = this.props.userSess;
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
                {name ? (
                  <Link onClick={logout}to="/logout">Logout</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}

                {name ? <Link to="/user">Profile</Link> : <Link to="/register">Register</Link>}
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
            <Footer />
          </Route>
          {/* <Route path="/petpage">
            <PetPage />
          </Route> */}
          <Route path="/login">
            {name ? (
              <Redirect to="/user" />
            ) : (
              <Login
                submit={submit}
                loginInfo={login}
                update={formValueUpdate}
              />
            )}
            {/* <Route path="/user">
              <UserContainer />
            </Route> */}
            <Footer />
          </Route>
          <Route path="/user">
            <UserContainer />
          </Route>
          <Route path="/register">
            <Register
              submit={submit}
              registerInfo={register}
              update={formValueUpdate}
            />
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
  yelpError: getYelpDataError(state),
  businesses: getYelpData(state),
  yelpPending: getYelpDataPending(state),
  userSess: state.userSess
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchYelp,
      createUser,
      loginUser,
      logoutUser
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);