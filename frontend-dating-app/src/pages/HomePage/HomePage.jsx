import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  StarOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./HomePage.css";
import NavigationBar from "../../components/NavigationBar/nav-bar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <NavigationBar />
      <div className="card-container">
        <div className="card-image-container">
          <div className="card-arrows-container-left">
            <Button
              type="ghost"
              shape="circle"
              icon={<LeftOutlined />}
              className="card-arrow-left"
              style={{ left: 0 }}
            />
          </div>
          <img
            className="card-image"
            src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
            alt="card"
          />
          <div className="card-arrow-container-right">
            <Button
              type="ghost"
              shape="circle"
              icon={<RightOutlined />}
              className="card-arrow-right"
            />
          </div>
        </div>
        <div className="card-info-container">
          <div className="card-name-age-container">
            <span className="card-name">John Smith</span>
            <span className="card-age">25</span>
          </div>
          <div className="card-buttons-container">
            <Button
              type="primary"
              shape="circle"
              icon={<CloseOutlined />}
              className="card-button-x"
              style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<StarOutlined />}
              className="card-button-star"
              style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<CheckOutlined />}
              className="card-button-tick"
              style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
