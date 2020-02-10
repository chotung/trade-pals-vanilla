import React, { Component } from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
export default class DeliveryOptions extends Component {
  state = {
    shipping: true,
    shippingOption: [{}],
    pickup: false,
  }


  // CHECKOUT BUTTON
  checkout = () => {
    /**
     * click
     * go to processing page
     * doen process || error
     * you bought your dog
     * add the items from cart to profile
     *    -updates the store
     *    -update the db
     * redirect to profile
     */
  }

  render() {
    return (
      <Container className="delivery-container">
        <Row>
          <Col className="delivery-col" lg={12} >
            <Card>
              <h1 className="card-footer"></h1>
              <Card.Body>
                <Card.Text>
                  A dog
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12}>
            <Button>Checkout</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
