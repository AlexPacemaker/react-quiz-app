import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestion: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  finished: false,
  questions: [],
};

export const mainSlice = createSlice({
  name: "@main",
  initialState,
  reducers: {
    setCurrentQuestion(state) {
      state.currentQuestion += 1;
    },
    setCorrectAnswers(state) {
      state.correctAnswers += 1;
    },
    setIncorrectAnswers(state) {
      state.incorrectAnswers += 1;
    },
    setFinished(state, action) {
      state.finished = action.payload;
    },
    setQuestions(state, action) {
      state.questions = action.payload;
    },
  },
});

export const {
  currentQuestion,
  correctAnswers,
  incorrectAnswers,
  finished,
  questions,
  setCurrentQuestion,
  setCorrectAnswers,
  setIncorrectAnswers,
  setFinished,
  setQuestions,
} = mainSlice.actions;

export default mainSlice.reducer;
