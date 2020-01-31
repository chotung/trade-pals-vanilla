import React from "react";
import { Container, Col, Button, Row, Form, Image } from "react-bootstrap";

const registerForm = {
  backgroundColor: "rgb( 250, 251, 252, 0.9)",
  minWidth: "50vw",
  padding: "2rem",
  borderRadius: "24px",
  height: "auto",
  boxShadow: "0px 2px 36px 6px rgba(0,0,0,0.3)"
};


const Login = () => {
  return (
    <Container fluid className="registerCon">
      <Row className="customRow">
        <Image
          className="imageStyle"
          fluid
          src="https://petcentral.chewy.com/wp-content/uploads/Dog_Normal_Sleep_Puppy_Dec_LS_MZ-1.jpg"
        />
        <Col className="registerCol" sm={12}>
          <Form className="registerForm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" />
            </div>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
