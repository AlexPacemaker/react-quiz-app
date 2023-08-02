import React from "react";
import styles from "./Question.module.scss";

const Question = ({
  questions,
  options,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // return (
  //   <div className={styles.Question}>
  //     <h3 className={styles.title}>{questions}</h3>
  //     <form>
  //       <div className={styles.options}>
  //         {options.map((option, index) => (
  //           <button
  //             key={index}
  //             type='button'
  //             onClick={() => setFieldValue("answer", option)}
  //           >
  //             {option}
  //           </button>
  //         ))}
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    <div className={styles.Question}>
      <p className={styles.question}>{questions}</p>
      <div className={styles.options}>
        {options.map((option, index) => (
          <label key={index} className={styles.option}>
            <input
              type='radio'
              value={option}
              checked={selectedAnswer === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
