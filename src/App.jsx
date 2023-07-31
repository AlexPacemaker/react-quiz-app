import React, { useState } from "react";
import { useFormik } from "formik";

const App = ({ questions }) => {
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
};

export default App;
