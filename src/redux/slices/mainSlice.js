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
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
    setCorrectAnswers(state, action) {
      state.correctAnswers = action.payload;
    },
    setIncorrectAnswers(state, action) {
      state.incorrectAnswers = action.payload;
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
