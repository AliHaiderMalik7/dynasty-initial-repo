import React from "react";
import { Row, Col, Button, Checkbox, Form, Input, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { PasswordInput } from "antd-password-input-strength";
import GoogleLogo from "./../../assets/google.png";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const { Title } = Typography;

const SignupForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    // <div justify="center">
    <div className="register-card-class">
      <div className="register-title-class">Start a free account</div>
      <div className="register-sub-title-class">No credit card required</div>
      <div className="form-class">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          {...layout}
        >
          <Col span={24}>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="FirstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                  style={{ marginRight: "10px" }}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="LastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                  style={{ marginLeft: "10px" }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                  style={{ marginRight: "10px" }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phone"
                  name="Phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone!",
                    },
                  ]}
                  style={{ marginLeft: "10px" }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <PasswordInput />
          </Form.Item>
          <Form.Item
            label="Verify Password"
            name="verifypassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="inline-class"
          >
            <Checkbox>i have read and agree to the</Checkbox>
            <a className="terms-of-service">Terms of service</a>
          </Form.Item>

          <Form.Item style={{ marginTop: "10px" }}>
            <Button type="primary" htmlType="submit" block>
              Sign Up
              <ArrowRightOutlined style={{ color: "#fff", fontSize: "14px" }} />
            </Button>
          </Form.Item>
        </Form>
        <div id="header">
          <h3>or sign up with</h3>
        </div>
        <a className="btn-google">
          <img src={GoogleLogo} style={{ height: "24px", width: "24px" }} />
          Google
        </a>
        <div className="already-account">
          Already have account? <a className="already-login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
