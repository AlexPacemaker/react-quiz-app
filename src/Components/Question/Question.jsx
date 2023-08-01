import React from "react";
import styles from "./Question.module.scss";

const Question = ({ question, options, setFieldValue }) => {
  return (
    <>
      <h3>{question}</h3>
      <form>
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setFieldValue("answer", option)}
          >
            {option}
          </button>
        ))}
      </form>
    </>
  );
};

export default Question