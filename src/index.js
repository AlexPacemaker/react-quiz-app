import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { questions } from "./data";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App questions={questions} />
    </React.StrictMode>
  </BrowserRouter>
);
