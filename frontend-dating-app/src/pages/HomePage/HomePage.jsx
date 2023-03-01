import { Button, Carousel } from "antd";

import "./HomePage.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import MatchCard from "../../components/MatchCard/MatchCard";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomePage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="home-page-container">
      <NavigationBar />

      <div className="display-person-container" style={{}}>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className="matchcard-container">
        <MatchCard />
      </div>
    </div>
  );
};

export default HomePage;
