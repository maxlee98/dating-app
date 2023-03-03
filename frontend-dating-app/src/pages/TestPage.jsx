import React from "react";
import FeatureCarousel from "../components/feature-card-carousel/feature-card-carousel";
import "./TestPage.css";

export default function TestPage() {
  return (
    <div className="test-page-container">
      <h1>This is a test page</h1>
      <div className="feature-carousel">
        <FeatureCarousel />
      </div>
    </div>
  );
}
