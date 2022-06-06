import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./confirmation.css";

const ConfirmationError = () => {
  return (
    <div className="confirmation-error">
      <div className="confirm-title">
        <div className="circle-error">
          <CloseOutlined className="error-icon" />
        </div>
        Error found
        <div className="confirm-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </div>
        <Button className="confirm-btn" type="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationError;
