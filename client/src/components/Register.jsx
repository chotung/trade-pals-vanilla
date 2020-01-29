import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const registerForm = {
  border: "solid 1px black",
  backgroundColor: "rgb( 250, 251, 252, 0.9)",
  minWidth: "50vw",
  padding: "2rem",
  borderRadius: "24px",
  height: "auto",
  boxShadow: "0px 2px 36px 6px rgba(0,0,0,0.3)"
};

const registerCon = {
  backgroundImage:
    "url(https://petcentral.chewy.com/wp-content/uploads/Dog_Normal_Sleep_Puppy_Dec_LS_MZ-1.jpg)",
  backgroundSize: "cover",
    border: "solid 1px black",
  justifyContent: "center",

// add background image that transitions
// white film over
  display: "flex",
  alignItems: "center"
};

const registerCol = {
  marginBottom: "3.5rem",
}

// on small screens center not flex-end
const Register = () => {
  return (
    <Container fluid style={registerCon}>
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
