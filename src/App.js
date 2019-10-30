import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
// import Topics from './components/Topics';
// import About from './components/About'
// import Home from './components/Home'
// import Users from './components/Users'
import Header from './containers/Header'
import Main from './containers/Main'
// import Footer from './containers/Footer'
import ShoppingCart from './containers/ShoppingCart';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users">Users</Link>
    //         </li>
    //         <li>
    //           <Link to="/topics">Topics</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/topics">
    //         <Topics />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    // <div>
    //   <Header />
    //   <Main />
    //   <Footer />
    // </div>

    <Router>
      <div>
        <div>
          <Link to="/">
           <h1>Trade Pals</h1>
          </Link>
          <Link to="/shoppingcart">
            Cart
          </Link>
        </div>
       {/* Order matters */}
        <Switch>
          <Route path="/shoppingcart">
            <ShoppingCart/>
          </Route>
          <Route path="/">
            <Main/>
            <Header/>
          </Route>

          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
