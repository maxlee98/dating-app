import React from "react";
import { HeartTwoTone, DislikeTwoTone, CrownTwoTone } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import ImageCarousel from "../image-carousel/image-carousel";

const { Meta } = Card;

const FeatureCard = () => (
  <Card
    style={{ width: 300 }}
    cover={<ImageCarousel />}
    actions={[
      <DislikeTwoTone
        key="dislike"
        twoToneColor="red"
        style={{ fontSize: "3vw" }}
      />,
      <CrownTwoTone
        key="crown"
        twoToneColor="cyan"
        style={{ fontSize: "3vw" }}
      />,
      <HeartTwoTone
        key="like"
        twoToneColor="lightgreen"
        style={{ fontSize: "3vw" }}
      />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default FeatureCard;
