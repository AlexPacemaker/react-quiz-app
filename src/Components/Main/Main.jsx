import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import styles from "./Main.module.scss";
import Question from "../Question/Question";
import EndTest from "../EndTest/EndTest";

const Main = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const API = "https://alex-pacemaker.ru/quiz";

  useEffect(() => {
    (async () => {
      await axios.get(API).then((res) => {
        setQuestions(res.data);
      });
    })();
  }, []);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswer = () => {
    const correctAnswer = questions[currentQuestion].answer;
    return selectedAnswer === correctAnswer;
  };
  const handleSubmit = (values, { setSubmitting }) => {
    if (!selectedAnswer) {
      alert("Пожалуйста, выберите ответ.");
      setSubmitting(false);
      return;
    }

    if (checkAnswer()) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      handleNext();
    }

    setSelectedAnswer(""); // Сброс выбранного ответа после проверки
    setSubmitting(false);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
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
      {}
      {!finished ? (
        <>
          <h2 className={styles.title}>
            Вопрос {currentQuestion + 1} из {questions.length}
          </h2>
          {currentQuestionObj && (
            <Question
              questions={currentQuestionObj.question}
              options={currentQuestionObj.options}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          )}
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
