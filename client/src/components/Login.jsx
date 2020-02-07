import React from "react";
import { Container, Col, Button, Row, Form, Image } from "react-bootstrap";
import { bindActionCreators } from "redux"
import { createUser, loginUser } from "../config/apis/fetchUser";
import { connect } from "react-redux";

const Login = (props) => {
//  console.log("LOGIN COMPONENT", props);
 const { update, submit } = props
 const { email, password } = props.loginInfo
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
                type="password"
                className="form-control"
                value={password}
                onChange={update}
              />
            </div>
            <Button type="submit" value="Submit" data-type="login">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createUser: createUser,
      loginUser
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Login);
