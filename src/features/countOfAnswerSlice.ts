/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

type CountOfAnswer = {
  countOfCommonAnswers: number;
  countOfRightAnswers: number;
};

const initialState: CountOfAnswer = {
  countOfCommonAnswers: 0,
  countOfRightAnswers: 0,
};

export const countOfAnswersSlice = createSlice({
  name: 'countOfAnswers',
  initialState,
  reducers: {
    addCommonAnswer: (state) => {
      state.countOfCommonAnswers = state.countOfCommonAnswers + 1;
    },
    addRightAnswer: (state) => {
      state.countOfRightAnswers = state.countOfRightAnswers + 1;
    },
    restart: (state) => {
      state.countOfCommonAnswers = 0;
      state.countOfRightAnswers = 0;
    },
  },
});

export const { addCommonAnswer, addRightAnswer, restart } = countOfAnswersSlice.actions;
export default countOfAnswersSlice.reducer;
