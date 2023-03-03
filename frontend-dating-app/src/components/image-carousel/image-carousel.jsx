import React, { useState, useEffect } from "react";
import { Carousel, Image, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./image-carousel.css";

const ImageCarousel = () => (
  <Carousel
    autoplay
    autoplaySpeed={1000}
    effect="fade"
    className="carousel-wrap"
  >
    <div className="featured-image-container">
      <Image
        width={300}
        src="https://joesch.moe/api/v1/male/joe"
        className="featured-image"
      />
    </div>
    <div className="featured-image-container">
      <Image
        width={300}
        src="https://joesch.moe/api/v1/male/jake"
        className="featured-image"
      />
    </div>
    <div className="featured-image-container">
      <Image
        width={300}
        src="https://joesch.moe/api/v1/male/jed"
        className="featured-image"
      />
    </div>
  </Carousel>
);
export default ImageCarousel;
