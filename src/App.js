import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import SignupForm from "./components/SignupForm/SignupForm";
import Verify from "./components/Verify/Verify";
import ConfirmationSuccess from "./components/Confirmation/ConfirmationSuccess";
import ConfirmationError from "./components/Confirmation/ConfirmationError";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    // <Routes>
    //   <Route exact path="/" element={<Navbar />}>
    //     <Route exact path="login" element={<LoginForm />} />
    //     <Route exact path="login/error" element={<ConfirmationError />} />
    //     <Route exact path="regester" element={<SignupForm />} />
    //     <Route exact path="regester/verify" element={<Verify />} />
    //     <Route
    //       exact
    //       path="regester/success"
    //       element={<ConfirmationSuccess />}
    //     />
    //     <Route exact path="*" element={<Navigate to="/" />} />
    //   </Route>
    // </Routes>
    <>
      <Navbar />
      <ConfirmationSuccess />
    </>
  );
};

export default App;
