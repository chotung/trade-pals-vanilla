import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux"

const DeliveryOptions = (props) => {

  const checkout = (props) => {
    console.log(props);
  };

  return (
    <div>
        <Container className="delivery-container">
         <Row>
           <Col className="delivery-col" lg={12}>
             <Card>
               <Card.Body>
                 <Card.Text>A dog</Card.Text>
               </Card.Body>
               <div className="card-footer">
                 <Button onClick={() => checkout(props)}>Checkout</Button>
               </div>
             </Card>
           </Col>
         </Row>
       </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
  userSess: state.userSess
})



export default connect(mapStateToProps)(DeliveryOptions);
