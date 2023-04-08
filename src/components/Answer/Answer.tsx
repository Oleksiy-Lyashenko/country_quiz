import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as questionActions from '../../features/questionSlice';
import * as countOfAnswerActions from '../../features/countOfAnswerSlice';
import { Country } from '../../types/country';

type Props = {
  country: Country;
  index: number;
}
// @ts-ignore
export const Answer: React.FC<Props> = ({ country, index }) => {
  const { capital, name } = country;

  const dispatch = useAppDispatch();
  const { rightAnswer, answer } = useAppSelector(state => state.question)

  const clickOnAnswer = (capital: string) => {
    dispatch(questionActions.addAnswer(capital))
    dispatch(questionActions.setVisible(true))

    if (capital === rightAnswer?.capital) {
      dispatch(countOfAnswerActions.addRightAnswer())
    }
  }

  if (rightAnswer === null) {
    return;
  }

  return (
    <li
      className={classNames(
        'quiz__variant',
        {
          'quiz__variant--right': answer === capital && answer === rightAnswer.capital,
        },
        {
          'quiz__variant--wrong': answer === capital && answer !== rightAnswer.capital,
        },
        {
          'quiz__variant--right': capital === rightAnswer.capital && answer !== '',
        },
      )}
      key={capital}
      onClick={() => clickOnAnswer(capital)}>
      <span className="quiz__letter">{index}</span>

      <span className="quiz__answer">{name.official}</span>
    </li>
  );
}
