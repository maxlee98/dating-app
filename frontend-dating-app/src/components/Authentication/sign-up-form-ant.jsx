import { Button, Checkbox, Form, Input, Radio, message } from "antd";
import { useState } from "react";
import AuthAPI from "../../api/auth.api";

const SignUpForm = (props) => {
  const onFinish = async (values) => {
    const postRequest = {
      email: values.Email,
      password: values.password,
      firstName: values.firstname,
      lastName: values.lastname,
      phone: values.mobile,
      gender: values.gender,
    };
    const data = await AuthAPI.register(postRequest);
    console.log(data);
    if (data) {
      // Redirect to home page after successful sign up
      message.success("Registration Successful", 5);
      props.setPageMode("sign-in");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ display: "flex" }}>
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
            style={{ marginRight: 20 }}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>
        </div>

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Invalid email format" },
            { min: 5, message: "Min 5 chars required" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 5, message: "min 5 chars pls" },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          label="Mobile Number"
          name="mobile"
          rules={[
            { required: true, message: "Please input your mobile number!" },
            {
              pattern: /^\d+$/,
              message: "Mobile number must contain only numbers",
            },
          ]}
        >
          <Input placeholder="Enter your mobile number" />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender!" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
