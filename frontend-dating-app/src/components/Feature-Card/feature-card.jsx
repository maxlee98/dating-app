import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import ImageCarousel from "../image-carousel/image-carousel";

const { Meta } = Card;

const FeatureCard = () => (
  <Card
    style={{ width: 300 }}
    cover={<ImageCarousel />}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
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
