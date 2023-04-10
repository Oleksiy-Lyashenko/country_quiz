import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import questionSlice from '../features/questionSlice';
import countOfAnswerSlice from '../features/countOfAnswerSlice';

export const store = configureStore({
  reducer: {
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