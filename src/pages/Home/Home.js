import React from "react";
import Carousel from "react-bootstrap/Carousel";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/yV50csN/slider1.jpg"
            alt="First slide"
            style={{ height: "30rem" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            src="https://i.ibb.co/SRqz6zz/slider2.jpg"
            alt="Second slide"
            style={{ height: "30rem" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/X3tX0h4/slider3.webp"
            alt="Third slide"
            style={{ height: "30rem" }}
          />
        </Carousel.Item>
      </Carousel>
      <div>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
