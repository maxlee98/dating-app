import React from "react";
import { HeartTwoTone, DislikeTwoTone } from "@ant-design/icons";
import {
  Avatar,
  Card,
  Col,
  Row,
  Typography,
  Divider,
  Button,
  Tooltip,
} from "antd";
import ImageCarousel from "../image-carousel/image-carousel";
import StoriesCard from "./stories-card";
import ImageCard from "./image-card";

const { Meta } = Card;
const { Title } = Typography;

const FeatureCard = () => {
  const story = true;
  const Header = () => {
    return (
      <>
        <Row justify="center" align="middle">
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Tooltip title="Like">
              <Button type="primary" shape="circle" icon={<HeartTwoTone />} />
            </Tooltip>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Title>Name, Age</Title>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Tooltip title="Like">
              <Button type="primary" shape="circle" icon={<HeartTwoTone />} />
            </Tooltip>
          </Col>
        </Row>
        <Divider></Divider>
      </>
    );
  };

  const Body = () => {
    if (story === true) {
      // Stories Card for a person
      return <StoriesCard />;
    } else {
      // Carousel Image Card
      return <ImageCard />;
    }
  };

  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default FeatureCard;
