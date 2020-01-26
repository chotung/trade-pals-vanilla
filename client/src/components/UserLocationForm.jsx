import React from 'react';
import { Row, Col } from "react-bootstrap"

const UserLocationForm = () => {
  return (
    <Row className=" m-0 user-location-form">
      <Col className="d-flex justify-content-lg-start title-colm" sm={12} md={4} lg={3}>
        <h1 className="title">Featured Pet</h1>
      </Col>
      <Col className="form-colm" sm={12} md={8} lg={9}>
        <form className="location-input">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="City or Province"
          />
        </form>
      </Col>
    </Row>
  );
}

export default UserLocationForm;
