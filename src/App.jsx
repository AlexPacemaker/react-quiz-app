import React, { useState } from "react";
import { useFormik } from "formik";

const questions = [
  {
    question: "Что такое DOM в JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Как объявить переменную в JavaScript?",
    options: ["var", "int", "string"],
    answer: "var",
  },
  {
    question: "Что такое closure (замыкание) в JavaScript?",
    options: [
      "Захватывание значений внешних переменных",
      "Безопасность данных",
      "Работа с сетью",
    ],
    answer: "Захватывание значений внешних переменных",
  },
  {
    question: "Как проверить что число целочисленное?",
    options: [
      "Умножить на 10",
      "Разделить на 10",
      "Разделить с остатком (%) на 1 и если результат деления будет равен 0, то значит число целое и наоборот",
    ],
    answer:
      "Разделить с остатком (%) на 1 и если результат деления будет равен 0, то значит число целое и наоборот",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.answer === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      handleNext();
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      answer: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className='App'>
      {!finished ? (
        <div>
          <h2>
            Вопрос {currentQuestion + 1} из {questions.length}
          </h2>
          <h3>{questions[currentQuestion].question}</h3>
          <form onSubmit={formik.handleSubmit}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                type='submit'
                onClick={() => formik.setFieldValue("answer", option)}
              >
                {option}
              </button>
            ))}
          </form>
        </div>
      ) : (
        <div>
          <h2>Тест завершен!</h2>
          <h3>
            Верное количество ответов: {correctAnswers} из {questions.length}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
