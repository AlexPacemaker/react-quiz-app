import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";

const App = ({ questions }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main questions={questions} />} />
      </Routes>
    </>
  );
};

export default App;
