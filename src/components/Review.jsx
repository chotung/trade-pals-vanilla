import React from 'react';
import { Card } from 'react-bootstrap'
const Review = (props) => {
  console.log(props);
  return (
    <Card bg="light" className="review-item flex-row">
      <div className="border-bottom-0 border-right card-header">
        <Card.Title>Hello</Card.Title>
        <Card.Img
          // onClick={() => goToCardDetails(cart)}
          variant="top"
          // src={cart.imgUrl}
          // alt={cart.name}
        />
      </div>
      <div className="info-block">
        <div className="description">
          The seller gave us a great deal on poopers here was very thorough with
          the medical records and personality type of poopers
        </div>
      </div>
    </Card>
  );
}

export default Review;
