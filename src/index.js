import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './config/store'
// import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root")
}


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

ReactDOM.render(
  <Provider store={store}> 
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      < App / >
    </ThemeProvider>
  </Provider>,
  element
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
