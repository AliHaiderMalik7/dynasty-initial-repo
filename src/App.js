import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import SignupForm from "./components/SignupForm/SignupForm";
import Verify from "./components/Verify/Verify";
import ConfirmationSuccess from "./components/Confirmation/ConfirmationSuccess";
import ConfirmationError from "./components/Confirmation/ConfirmationError";

const App = () => {
  return (
    <>
      <Navbar />
      <ConfirmationSuccess />
    </>
  );
};

export default App;
