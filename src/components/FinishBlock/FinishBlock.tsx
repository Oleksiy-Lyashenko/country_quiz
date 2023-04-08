import { useAppDispatch, useAppSelector } from '../../app/hooks';
import endImg from '../../assets/end_img.svg';
import * as questionActions from '../../features/questionSlice';
import * as countOfAnswerActions from '../../features/countOfAnswerSlice';

export const FinishBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { countOfRightAnswers } = useAppSelector(
    (state) => state.countOfAnswer,
  );

  const clickTryAgain = () => {
    dispatch(questionActions.deleteVariants())
    dispatch(countOfAnswerActions.restart());
    dispatch(questionActions.addVariants());
  }

  return (
    <div className="quiz__finish">
      <img src={endImg} alt="" className="quiz__finish-img" />
      <span className="quiz__question quiz__question--end">Results</span>
      <span className="quiz__result">
        You got{' '}
        <span
          className={
            countOfRightAnswers >= 3 
              ? 'quiz__count-of-result--big'
              : 'quiz__count-of-result--small'
          }>
          {countOfRightAnswers}
        </span>{' '}
        correct answers
      </span>
      <button className="quiz__finish-button" onClick={clickTryAgain}>
        Try again
      </button>
    </div>
  );
};
