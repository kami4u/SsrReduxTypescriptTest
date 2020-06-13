import React from "react";
import ReactDOM from "react-dom";
import Test from "./components/Index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  document.getElementById("app")
);
