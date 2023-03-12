import React from "react";
import { HeartTwoTone, DislikeTwoTone } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography, Divider } from "antd";
import ImageCarousel from "../image-carousel/image-carousel";

const { Meta } = Card;

const StoriesCard = () => {
  // Stories Card for a person
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Story 1" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Story 2" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Story 3" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StoriesCard;
