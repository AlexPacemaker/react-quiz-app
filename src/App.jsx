// import React, { useState } from "react";
// import { useFormik } from "formik";
// import Question from "./Components/Question/Question";

// const App = ({ questions }) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [finished, setFinished] = useState(false);

//   const handleNext = () => {
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const formik = useFormik({
//     initialValues: {
//       answer: "",
//     },
//     onSubmit: (values) => {
//       handleSubmit(values.answer);
//       formik.resetForm();
//     },
//   });

//   const handleSubmit = (selectedAnswer) => {
//     if (selectedAnswer === questions[currentQuestion].answer) {
//       setCorrectAnswers(correctAnswers + 1);
//     }
//     if (currentQuestion === questions.length - 1) {
//       setFinished(true);
//     } else {
//       handleNext();
//     }
//   };

//   const question = questions[currentQuestion];

//   return (
//     <div className='App'>
//       {!finished ? (
//         <>
//           <h2>
//             Вопрос {currentQuestion + 1} из {questions.length}
//           </h2>
//           <Question
//             question={question.question}
//             options={question.options}
//             onSelect={formik.handleChange}
//             selectedOption={formik.values.answer}
//           />
//         </>
//       ) : (
//         <>
//           <h2>Тест завершен!</h2>
//           <h3>
//             Верное количество ответов: {correctAnswers} из {questions.length}
//           </h3>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { useFormik } from "formik";
import Question from "./Components/Question/Question";

const App = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const formik = useFormik({
    initialValues: {
      answer: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.answer);
      formik.resetForm();
    },
  });

  const handleSubmit = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
    } else {
      handleNext();
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className='App'>
      {!finished ? (
        <>
          <h2>
            Вопрос {currentQuestion + 1} из {questions.length}
          </h2>
          <Question
            question={question.question}
            options={question.options}
            onChange={formik.handleChange}
          />
        </>
      ) : (
        <>
          <h2>Тест завершен!</h2>
          <h3>
            Верное количество ответов: {correctAnswers} из {questions.length}
          </h3>
        </>
      )}
    </div>
  );
};

export default App;
