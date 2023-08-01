import React from "react";
import styles from "./EndTest.module.scss";

const EndTest = ({ correctAnswers, questionsLength, resetTest }) => {
  console.log(questionsLength);
  return (
    <div className={styles.endTest}>
      <h2 className={styles.endtestTitle}>Тест завершен!</h2>
      <h3 className={styles.endtestResult}>
        Верное количество ответов: {correctAnswers} из {questionsLength}
      </h3>
      <button className={styles.restartButton} onClick={resetTest}>
        Начать тест заново
      </button>
    </div>
  );
};

export default EndTest;
