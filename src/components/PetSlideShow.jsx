import React from 'react';
import { Carousel, Image } from 'react-bootstrap'
const PetSlideShow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          fluid
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1535741172595-554e8601ffb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="First slide"
        />
        <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
          <h3>First slide label</h3>
          <p>Please Adopt...</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Image
          fluid
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1521247560470-d2cbfe2f7b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>This could be you</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1470390356535-d19bbf47bacb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>You Never Know Who Can Change Your Life...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PetSlideShow;
