import React from "react";
import { Carousel } from "antd";
import FeatureCard from "./Feature-Card/feature-card";
import "./feature-card-carousel.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "black",
};

export default function FeatureCarousel() {
  return (
    <Carousel dotPosition={"top"}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div className="feature-card-container">
        <FeatureCard />
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
