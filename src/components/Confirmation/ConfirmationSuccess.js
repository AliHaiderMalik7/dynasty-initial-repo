import React from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./confirmation.css";

const ConfirmationSuccess = () => {
  return (
    <div className="confirmation-success">
      <div className="confirm-title">
        <div className="circle-success">
          <CheckOutlined className="success-icon" />
        </div>
        You’re all signed up!
        <div className="confirm-content">
          Please check your email for the confirmation message we just sent you
        </div>
        <Button className="confirm-btn" type="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationSuccess;
