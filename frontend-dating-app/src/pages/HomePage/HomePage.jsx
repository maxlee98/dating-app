import { Breadcrumb, Layout, theme } from "antd";

import { useState } from "react";
import FeatureCard from "../../components/feature-card-carousel/Feature-Card/feature-card";

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
          <div className="body-container">
            <FeatureCard />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Dating App ©2023 Created by Max Lee
        </Footer>
      </Layout>
    </Layout>
  );
}
