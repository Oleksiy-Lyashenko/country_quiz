import { useState } from 'react';

import classNames from 'classnames';
import Answer from './Answer';

export default function Question({
  countries,
  rightAnswer,
  clickOnNext,
  countAnswers,
  countOfAnswers,
  changeTypeOfQuestion,
  typeOfQuestion,
}) {
  const [rigthOrWrong, setRigthOrWrong] = useState('');

  const clickOnAnswer = (capital) => {
    setRigthOrWrong(capital);
  };

  const clickOnButton = () => {
    clickOnNext();
    countAnswers(rigthOrWrong);
    changeTypeOfQuestion();
  };

  return (
    <>
      {typeOfQuestion < 5 ? (
        <>
          <img src={rightAnswer.flags.svg} alt="" className='quiz__flag'/>

          <h3 className="quiz__question">Which country does this flag belong to?</h3>
        </>
      ) : (
        <h3 className="quiz__question">{rightAnswer.capital} is the capital of</h3>
      )}

      <ul className={classNames('quiz__list', { 'quiz__list--closed': rigthOrWrong !== '' })}>
        {countries.map((country, index) => (
          <Answer
            country={country}
            index={index}
            key={country.capital}
            rightAnswer={rightAnswer}
            rigthOrWrong={rigthOrWrong}
            setRigthOrWrong={setRigthOrWrong}
            clickOnAnswer={clickOnAnswer}
          />
        ))}
      </ul>

      {rigthOrWrong !== '' && (
        <button className="quiz__button" onClick={clickOnButton}>
          {countOfAnswers.common === 4 ? 'Finish' : 'Next'}
        </button>
      )}
    </>
  );
}
