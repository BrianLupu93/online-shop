import React from "react";
import image1 from "../../images/car5.jpg";
import image2 from "../../images/car6.jpg";
import image3 from "../../images/car7.jpg";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
