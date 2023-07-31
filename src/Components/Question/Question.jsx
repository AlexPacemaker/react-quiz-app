import React from "react";
import styles from "./Question.module.scss";

const Question = ({ question, options, onSelect, selectedOption }) => {
  const handleOptionSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className={styles.Question}>
      <h3 className={styles.QuestionTitle}>{question}</h3>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleOptionSelect(option)}
          className={selectedOption === option ? styles.SelectedOption : ""}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
