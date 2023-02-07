import React from "react";
import Slider from "react-slick";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";

const HomeDefaultBanner = () => {
  const carouselSetting = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="ps-home-banner">
      <Slider {...carouselSetting} className="ps-carousel">
        <div className="carousel-item center-element">
          <div
            className="ps-banner--3 bg--cover white image-home-carousel center-element"
            // style={{
            //   width: "300px",
            //   height: "300px",
            //   background: `url(/static/img/bg/home-default/1111.jpg)`,
            // }}
          >
            <div className="ps-banner__content">
              {/* <p>Melanin Hat</p> */}

              <h3 className="color-yellow">Welcome</h3>
              <a className="ps-link--under discover-more-size" href="#">
                Discover more
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item center-element">
          <div
            className="ps-banner--3 bg--top-left right image-home-carousel2"
            // style={{
            //   width: "100%",
            //   height: "300px",
            //   background: `url(/static/img/bg/home-default/22.jpg)`,
            // }}
          >
            <div className="ps-banner__content">
              {/* <p>Standout Swear</p> */}
              <h3 className="color-white">Bienvenue</h3>
              <a className="ps-link--under discover-more-size" href="#">
                Discover more
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item center-element ">
          <div
            className="ps-banner--3 bg--top-right image-home-carousel3"
            // style={{
            //   width: "100%",
            //   height: "300px",
            //   background: `url(/static/img/bg/home-default/21.jpg)`,
            // }}
          >
            <div className="ps-banner__content">
              {/* <p>T-shirt Standout </p> */}
              <h3 className="color-yellow">Karibu</h3>
              <a className="ps-link--under discover-more-size" href="#">
                Discover more
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeDefaultBanner;
