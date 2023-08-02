import React from "react";
import styles from "./Question.module.scss";

const Question = ({
  questions,
  options,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const handleOptionChange = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <div className={styles.Question}>
      <p className={styles.title}>{questions}</p>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            className={selectedAnswer === option ? styles.selected : ""}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
