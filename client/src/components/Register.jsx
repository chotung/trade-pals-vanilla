import React from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap"

// on small screens center not flex-end
const Register = (props) => {
  const { update, submit } = props;
  const { email, password, name } = props.registerInfo;

  return (
    <Container fluid className="registerCon">
      <Row className="customRow">
        <Image
          className="imageStyle"
          fluid
          src="https://petcentral.chewy.com/wp-content/uploads/Dog_Normal_Sleep_Puppy_Dec_LS_MZ-1.jpg"
        />
        <Col className="registerCol" sm={12}>
          <Form className="registerForm" onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                onChange={update}
                value={name}
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={update}
                value={email}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <label htmlFor="password">Password</label>
              <input
                name="password"
                onChange={update}
                value={password}
                type="password"
                className="form-control"
              />
              
            </div>
            <Button type="submit" value="Submit" data-type="register">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
