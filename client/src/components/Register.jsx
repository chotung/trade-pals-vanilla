import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const registerForm = {
  border: "solid 1px black",
  maxWidth: "500px",
  minWidth: "50vw",
  // width: "",
  height: "auto"
};

const registerCon = {
  border: "solid 1px black",
  // color: "white",
  justifyContent: "flex-end",
  display: "flex",
  alignItems: "center",
}


// on small screens center not flex-end
const Register = () => {
  return (
    <Container fluid style={registerCon}>
      <Row>
        <Col sm={12}>
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
