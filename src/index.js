import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
