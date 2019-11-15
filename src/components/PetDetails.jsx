import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const PetDetails = props => {
  console.log(props.petData);
  const { name, imgUrl } = props.petData.pet;
  return (
    <Row className="pet-detail-row">
      <Col className="col-6" xs="12" sm="3">
        <Row noGutters>
          {/* <Col>
            shrink the images
            <Image fluid src={imgUrl} alt="other-pics" />
          </Col> */}
          <Col xs="12">
            <Image className="pet-detail-image" src={imgUrl} alt={name} />
          </Col>
        </Row>
      </Col>
      {/* <Col className="col-12 col-sm-3 col-md-3 col-lg-3">Description</Col>
      <Col className="col-12 col-sm-3 col-md-3 col-lg-3">ads or something</Col> */}
      <Col xs="12" sm="3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet id
        repudiandae consequatur tempora ratione eius quisquam ab. Dolorum,
        aliquam architecto?Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Aliquam, harum?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nihil, similique natus accusantium autem eveniet obcaecati
        voluptatum repudiandae ipsum provident ad itaque molestiae
        necessitatibus repellat at quaerat iure? Est, voluptatum tempore!
        Dolores error placeat esse ea. Architecto tempora, temporibus porro
        atque ex fuga maiores, necessitatibus quis perspiciatis quam, hic
        repellat! Perferendis eaque voluptatem accusamus dicta repellendus sunt,
        minus reprehenderit corporis sequi esse repudiandae, temporibus optio
        totam veniam commodi aperiam rem non. Laboriosam quisquam, eveniet quas
        aperiam accusamus delectus adipisci eligendi laudantium voluptatum
        dolorum id illum veritatis suscipit maxime vel quam nulla!
      </Col>
      <Col className="buy" xs="12" sm="3">
        ads or something
      </Col>
    </Row>
  );
};

export default PetDetails;
