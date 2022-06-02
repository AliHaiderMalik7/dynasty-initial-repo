import { Button } from "antd";
import React from "react";
import PhoneValidation from "./PhoneInout";
import GoogleLogo from "./../../assets/googlelogo.png";

const Verify = () => {
  return (
    <div className="verify-class">
      <div className="google-logo">
        <img src={GoogleLogo} />
        <div className="verify-phone-title">Verify your phone number</div>
        <div className="verify-content">
          For your security, Google wants to make sure it’s really you. Google
          will send a text message with a 6-digit verification code. Standard
          rates apply
        </div>
        <div className="phone-input">
          <PhoneValidation />
        </div>
        <div className="verify-buttons">
          <div>
            <Button className="verify-back" type="link">
              Back
            </Button>

            <Button className="verify-next" type="primary">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
