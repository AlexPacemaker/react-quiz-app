import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
