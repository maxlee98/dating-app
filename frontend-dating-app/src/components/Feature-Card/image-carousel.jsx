import React, { useState, useEffect } from "react";
import { Carousel, Image, Card } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./image-carousel.css";

const ImageCarousel = () => (
  <Card title="[PERSON NAME], [AGE]" className="card-wrap">
    <Carousel effect="fade" className="carousel-wrap">
      <div className="featured-image-container">
        <Image
          width={500}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="featured-image"
        />
      </div>
      <div className="featured-image-container">
        <Image
          width={500}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="featured-image"
        />
      </div>
      <div className="featured-image-container">
        <Image
          width={500}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="featured-image"
        />
      </div>
    </Carousel>
  </Card>
);
export default ImageCarousel;
