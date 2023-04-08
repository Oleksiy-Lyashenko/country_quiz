import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countriesReducer from '../features/countriesSlice';
import questionSlice from '../features/questionSlice';
import countOfAnswerSlice from '../features/countOfAnswerSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    question: questionSlice,
    countOfAnswer: countOfAnswerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>