import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './config/store'
import "bootstrap/dist/css/bootstrap.min.css";

// import * as serviceWorker from './serviceWorker';


const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root")
}

ReactDOM.render(
  <Provider store={store}> 
      < App / >
  </Provider>,
  element
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
