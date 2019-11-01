import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import Main from './containers/Main'
import ShoppingCart from './containers/ShoppingCart';
import "./styles/App.css"

const App = () => {
  return (
    <Router>
      <div>
        <div className="nav">
          <div>
           <Link className="" to="/">
            <h3>Trade Pals</h3>
          </Link>
          </div>
          <div>
            <Link className="" to="/shoppingcart">
            <h3>Cart</h3>
          </Link>
          </div>
          
        </div>
       {/* Order matters */}
        <Switch>
          <Route path="/shoppingcart">
            <ShoppingCart/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



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