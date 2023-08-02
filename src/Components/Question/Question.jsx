import React from "react";
import styles from "./Question.module.scss";

const Question = ({ questions, options, setFieldValue }) => {
  return (
    <div className={styles.Question}>
      <h3 className={styles.title}>{questions}</h3>
      <form>
        <div className={styles.options}>
          {options.map((option, index) => (
            <button
              key={index}
              type='button'
              onClick={() => setFieldValue("answer", option)}
            >
              {option}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Question;
