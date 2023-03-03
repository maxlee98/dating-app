import { Breadcrumb, Layout, theme } from "antd";
import { useState } from "react";
import FeatureCard from "../../components/Feature-Card/feature-card";
import ImageCarousel from "../../components/image-carousel/image-carousel";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./HomePage.css";

const { Header, Content, Footer } = Layout;

export default function HomePage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <NavigationBar />
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="feature-card-container">
            <FeatureCard />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
