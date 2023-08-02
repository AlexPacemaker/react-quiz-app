import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestion: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  finished: false,
  questions: [],
  selectedAnswer: "",
};

export const mainSlice = createSlice({
    name:'@main',
    initialState,
    reducers:{
        
    }
})