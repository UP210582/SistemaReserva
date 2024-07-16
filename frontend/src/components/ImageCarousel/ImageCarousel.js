import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/image.png"
          alt="Primera slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/image2.png"
          alt="Segunda slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Images/image3.png"
          alt="Tercera slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;