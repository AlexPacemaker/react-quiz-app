import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import styles from "./Main.module.scss";
import Question from "../Question/Question";
import EndTest from "../EndTest/EndTest";
import { useDispatch, useSelector } from "react-redux";
import {
  setFinished,
  setCorrectAnswers,
  setIncorrectAnswers,
  setQuestions,
  setCurrentQuestion,
} from "../../redux/slices/mainSlice";

const Main = () => {
  const {
    currentQuestion,
    correctAnswers,
    incorrectAnswers,
    finished,
    questions,
  } = useSelector((state) => state.mainSlice);

  const [selectedAnswer, setSelectedAnswer] = React.useState("");

  const dispatch = useDispatch();

  const API = "https://alex-pacemaker.ru/quiz";

  React.useEffect(() => {
    (async () => {
      await axios.get(API).then((res) => {
        dispatch(setQuestions(res.data));
      });
    })();
  }, []);

  const handleNext = () => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
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
      dispatch(setCorrectAnswers(correctAnswers + 1));
    } else {
      dispatch(setIncorrectAnswers(incorrectAnswers + 1));
    }

    if (currentQuestion === questions.length - 1) {
      dispatch(setFinished(true));
    } else {
      handleNext();
    }

    setSelectedAnswer(""); // Сброс выбранного ответа после проверки
    setSubmitting(false);
  };

  const resetTest = () => {
    dispatch(setCurrentQuestion(0));
    dispatch(setCorrectAnswers(0));
    dispatch(setIncorrectAnswers(0));
    dispatch(setFinished(false));
  };

  const formik = useFormik({
    initialValues: {
      selectedAnswer: "",
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
