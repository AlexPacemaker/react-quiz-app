import React from "react";
import { render } from "@testing-library/react";
import { Routes } from "react-router-dom";
import App from "./App";

test("renders the App component", () => {
  render(
    <Routes>
      <App />
    </Routes>
  );
});
