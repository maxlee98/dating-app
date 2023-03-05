import React from "react";
import { HeartTwoTone, DislikeTwoTone, CrownTwoTone } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import ImageCarousel from "../image-carousel/image-carousel";

const { Meta } = Card;

const FeatureCard = () => {
  return (
    <Card
      style={{
        width: 300,
        border: "1px solid #d9d9d9",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      cover={<ImageCarousel />}
      actions={[
        <DislikeTwoTone
          key="dislike"
          twoToneColor="red"
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
};
export default FeatureCard;
