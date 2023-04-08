import classNames from 'classnames';
import { Answer } from '../Answer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as questionActions from '../../features/questionSlice';
import * as countOfAnswerActions from '../../features/countOfAnswerSlice';
import { TypeOfQuestion } from '../TypeOfQuestion/TypeOfQuestion';

// @ts-ignore
export const Question: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    rightAnswer,
    variants,
    visibleButton
  } = useAppSelector(state => state.question);

  const { 
    countOfCommonAnswers
  } = useAppSelector(state => state.countOfAnswer);

  const clickOnButton = () => {
    dispatch(questionActions.setVisible(false))
    dispatch(questionActions.setTypeOfQuestion());
    dispatch(questionActions.addAnswer(''));
    dispatch(countOfAnswerActions.addCommonAnswer());
    dispatch(questionActions.deleteVariants())
    dispatch(questionActions.addVariants());
  }

  if (rightAnswer === null) {
    return;
  }

  return (
    <>
      <TypeOfQuestion />

      <ul className={classNames('quiz__list', { 'quiz__list--closed': visibleButton })}>
        {variants.map((country, index) => (
          <Answer country={country} index={index} key={country.capital + index} />
        ))}
      </ul>

      {visibleButton && (
        <button className="quiz__button" onClick={clickOnButton}>
          {countOfCommonAnswers === 4 ? 'Finish' : 'Next'}
        </button>
      )}
    </>
  );
}
