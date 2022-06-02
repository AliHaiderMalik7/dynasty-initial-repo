import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const PhoneValidation = () => {
  const [phone, setPhone] = useState();
  return (
    <PhoneInput
      country={"us"}
      value={phone}
      label="Phone Number"
      inputProps={{
        name: "Phone Number",
        required: true,
        autoFocus: true,
      }}
      onChange={(phone) => setPhone(phone)}
    />
  );
};
export default PhoneValidation;
