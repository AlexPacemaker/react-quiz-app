import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { questions } from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App questions={questions} />
  </React.StrictMode>
);
