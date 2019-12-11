import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { connect } from "react-redux"


const mapStateToProps = (state) => {
  return {
    pets: state.pets
  }
}




const PetSlideShow = (props) => {
  const params = {
    autoHeight: true,
    calculateHeight: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    spaceBetween: 30,
    effect: "fade"
  };
  return (
    <Swiper {...params}>
      <div>
        <div className="slide-content">
          <Image
            src="https://images.unsplash.com/photo-1559284957-298b8b225576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="front-page"
          />
          <div className="home-text">
            <h1 className="content-title">Trade Pals</h1>
            <p className="content-description">
              Where Furry Strangers Become Family
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-content">
          <Image
            src={props.pets[1].imgUrl}
            alt="front-page"
          />
          <div className="home-text">
            <h1 className="content-title">Trade Pals</h1>
            <p className="content-description">
              Where Furry Strangers Become Family
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-content">
          <Image
            src={props.pets[3].imgUrl}
            alt="front-page"
          />
          <div className="home-text">
            <h1 className="content-title">Trade Pals</h1>
            <p className="content-description">
              Where Furry Strangers Become Family
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-content">
          <Image
            src={props.pets[2].imgUrl}
            alt="front-page"
          />
          <div className="home-text">
            <h1 className="content-title">Trade Pals</h1>
            <p className="content-description">
              Where Furry Strangers Become Family
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="slide-content">
          <Image
            src={props.pets[5].imgUrl}
            alt="front-page"
          />
          <div className="home-text">
            <h1 className="content-title">Trade Pals</h1>
            <p className="content-description">
              Where Furry Strangers Become Family
            </p>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default connect(mapStateToProps)(PetSlideShow);
