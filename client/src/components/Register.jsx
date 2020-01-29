import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const registerForm = {
  border: "solid 1px black",
  maxWidth: "500px",
  minWidth: "50vw",
  padding: "2rem",

  // width: "",
  height: "auto"
};

const registerCon = {
  border: "solid 1px black",
  // color: "white",
  justifyContent: "center",
  // justifyContent: "center",

  display: "flex",
  alignItems: "center"
};

const registerCol = {
  marginBottom: "3.5rem",
}

// on small screens center not flex-end
const Register = () => {
  return (
    <Container className="justify-content-md-end" fluid style={registerCon}>
      <Row>
        <Col style={registerCol}sm={12}>
          <form style={registerForm} >
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
              <label htmlFor="name">name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name"/>
            </div>
            <Button>Submit</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
