import React from "react";
import {
  Row,
  Col,
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Alert,
} from "antd";
import "./../../styles/form.css";
import ErrorIcon from "./../../assets/erroralert.png";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const { Title } = Typography;

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const errMessage = "There are items that requires your attention";

  return (
    // <Row justify="center">
    <div className="card-class">
      <div className="title-class">Login to Dynasty</div>
      <div className="alert-class">
        <Alert
          message={errMessage}
          type="error"
          showIcon
          icon={<img src={ErrorIcon} className="error-icon" />}
          style={{ textAlign: "center" }}
        />
      </div>
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
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

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
            <Input />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    // </Row>
  );
};

export default LoginForm;
