import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

const footerStyle = {
  
}

export default class Footer extends Component {
  render() {
    return (
      // <nav className="navbar-default navbar-fixed-bottom footer">
      // </div>
      <Navbar  className="footer">

        <div className="row" style={{footerStyle}}>Footer</div>
      </Navbar>
    );
  }
}
