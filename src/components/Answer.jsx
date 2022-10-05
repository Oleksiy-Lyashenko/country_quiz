import classNames from 'classnames';

export default function Answer({ country, index, rightAnswer, rigthOrWrong, clickOnAnswer }) {
  const { capital, name } = country;

  return (
    <li
      className={classNames(
        'quiz__variant',
        {
          'quiz__variant--right': rigthOrWrong === capital && rigthOrWrong === rightAnswer.capital,
        },
        {
          'quiz__variant--wrong': rigthOrWrong === capital && rigthOrWrong !== rightAnswer.capital,
        },
        {
          'quiz__variant--right': capital === rightAnswer.capital && rigthOrWrong !== '',
        },
      )}
      key={capital}
      onClick={() => clickOnAnswer(capital)}>
      <span className="quiz__letter">{index}</span>

      <span className="quiz__answer">{name.common}</span>
    </li>
  );
}
