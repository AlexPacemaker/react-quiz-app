import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./Main.module.scss";
import Question from "../Question/Question";
import EndTest from "../EndTest/EndTest";

const Main = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswer = (values) => {
    return values.answer === questions[currentQuestion].answer;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (checkAnswer(values)) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      handleNext();
    }
    setSubmitting(false);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setFinished(false);
  };

  const formik = useFormik({
    initialValues: {
      answer: "",
    },
    onSubmit: handleSubmit,
  });

  const currentQuestionObj = questions[currentQuestion];

  return (
    <div className={styles.Main}>
      {!finished ? (
        <>
          <h2 className={styles.title}>
            Вопрос {currentQuestion + 1} из {questions.length}
          </h2>
          <Question
            question={currentQuestionObj.question}
            options={currentQuestionObj.options}
            setFieldValue={formik.setFieldValue}
          />
          <button
            className={styles.submit}
            type='submit'
            onClick={formik.handleSubmit}
          >
            Ответить
          </button>
        </>
      ) : (
        <EndTest
          correctAnswers={correctAnswers}
          questionsLength={questions.length}
          resetTest={resetTest}
        />
      )}
    </div>
  );
};

export default Main;
