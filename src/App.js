import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import Verify from "./components/Verify/Verify";
import ConfirmationSuccess from "./components/Confirmation/ConfirmationSuccess";
import ConfirmationError from "./components/Confirmation/ConfirmationError";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Layout from "./components/Layout/Layout";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login/error" element={<ConfirmationError />} />
        <Route path="/regester" element={<SignupForm />} />
        <Route path="/regester/verify" element={<Verify />} />
        <Route path="/regester/success" element={<ConfirmationSuccess />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
