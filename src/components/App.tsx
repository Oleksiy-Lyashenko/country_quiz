// import axios from 'axios';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import * as questionActions from '../features/questionSlice';
import { FinishBlock } from './FinishBlock';
import { QuestionBlock } from './QuestionBlock';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countOfCommonAnswers } = useAppSelector(state => state.countOfAnswer);

  useEffect(() => {
    dispatch(questionActions.initCountries())
  }, [])

  return (
    <div className="page">
      <div className="wrapper">
        <div className="quiz">
          <h1 className="quiz__title">country quiz</h1>

          <div className="quiz__block">
            {countOfCommonAnswers < 5 ? <QuestionBlock /> : <FinishBlock/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
