import React from "react";
import { Container, Row, Col, Card, Button, Image, Form } from "react-bootstrap"

const registerForm = {
  backgroundColor: "rgb( 250, 251, 252, 0.9)",
  minWidth: "50vw",
  padding: "2rem",
  borderRadius: "24px",
  height: "auto",
  boxShadow: "0px 2px 36px 6px rgba(0,0,0,0.3)",
  alignSelf: "center",
  width: "100%"
};

const registerCon = {
  // backgroundImage: "url(https://petcentral.chewy.com/wp-content/uploads/Dog_Normal_Sleep_Puppy_Dec_LS_MZ-1.jpg)",
  // backgroundSize: "cover",
  justifyContent: "center",
// add background image that transitions
// white film over
  display: "flex",
  alignItems: "center",
  padding: "0",
  position: "relative"
  // opacity: "0.2",
  // filter: "alpha(opacity=20)"
};

const customRow = {
  top: "0",
  margin: "0",
  height: "100vh",
  width: "100%",
  position: "relative"
};

const registerCol = {
  margin: "1em 0",
  display: "flex"
}
const imageStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  opacity: "0.5"
}

// on small screens center not flex-end
const Register = () => {
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
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              />
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
              />
              
            </div>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
