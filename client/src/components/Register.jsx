import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const registerForm = {
  border: "solid 1px black",
};

const registerCon = {
  border: "solid 1px black",
  color: "white",
}
const Register = () => {
  return (
    <Container fluid style={registerCon}>
      <Row>
        <Col>
          <div>hello</div>
          <form style={registerForm} >
            <div className="form-group">
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
