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
    //   <Route path="/" element={<Navbar />}>
    //     <Route path="/login" element={<LoginForm />} />
    //     <Route path="login/error" element={<ConfirmationError />} />
    //     <Route path="regester" element={<SignupForm />} />
    //     <Route path="regester/verify" element={<Verify />} />
    //     <Route path="regester/success" element={<ConfirmationSuccess />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Route>
    // </Routes>
    <>
      <Navbar />
      <SignupForm />
    </>
  );
};

export default App;
