import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { addToPetCard } from "../config/actions";

class PetCard extends Component {
  // const PetCard = props => {

  state = {
    truncated: true
  };
  goToCardDetails = cardId => {
    addToPetCard(cardId);
    this.props.history.push(`/petpage/${cardId.name}`);
  };
  
  truncate = str => {
    return str.length > 10 ? str.substring(0, 7) + "..." : str;
  };

  flip = () => {
    this.setState( prevState => {
      return {
        truncated: !prevState.truncated
      }
    })
  };

  render() {
    const { pet } = this.props;
    const desc =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, totam?";

    // const goToCardDetails = cardId => {
    //   addToPetCard(cardId);
    //   this.props.history.push(`/petpage/${cardId.name}`);
    // };
    // const desc =
    //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, totam?";
    // const { pet } = this.props;

    // const truncate = str => {
    //   return str.length > 10 ? str.substring(0, 7) + "..." : str;
    // };

    // const flip = () => {
    //   console.log("Hello World");
    // };

    console.log(this.state);
    return (
      <Form onSubmit={this.props.addToCart} id={pet.name} data={pet}>
        <Card className="pet-card" style={{ width: "100%" }}>
          <Card.Body className="pet-body">
            <Card.Img
              className="pet-image"
              variant="top"
              src={`${pet.imgUrl}`}
              alt={pet.name}
              onClick={() => this.goToCardDetails(pet)}
            />
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text onClick={() => this.flip()}>
              {this.state.truncated ? this.truncate(desc) : desc }
              {pet.price}
            </Card.Text>
            <span>
              <Button
                className="pet-button"
                variant="primary"
                type="submit"
                value="Submit"
              >
                Add To Cart
              </Button>
              <Button
                className="pet-button"
                onClick={() => this.goToCardDetails(pet)}
              >
                Learn More
              </Button>
            </span>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}
export default withRouter(PetCard);
