import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../api/auth.api";
import axios from "axios";
import { useState } from "react";

const SignInForm = (props) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    const postRequest = {
      email: values.email,
      password: values.password,
    };

    try {
      const data = await AuthAPI.login(postRequest);
      console.log(data);
      setTimeout(() => {
        message.success("Login Successful", 5);
        navigate("/home");
      }, 1000);
    } catch (err) {
      message.error("Login is unsuccessful", 5);
      throw err;
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          style={{ color: "white" }}
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Invalid Email Format" },
            { min: 5, message: "Min 5 chars required" },
          ]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 5, message: "Min 5 chars required" },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <div>
            <Button
              style={{
                marginTop: 12,
                height: 40,
                width: "100%",
                backgroundColor: "#212121",
              }}
              type="primary"
              htmlType="submit"
            >
              Sign in
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignInForm;
