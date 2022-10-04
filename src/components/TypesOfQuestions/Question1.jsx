import React, { useState } from 'react';
import Answer from './Answer';

export default function Question1({ countries, rightAnswer }) {
  const [rigthOrWrong, setRigthOrWrong] = useState('');

  const clickOnAnswer = (capital) => {
    if (rigthOrWrong) {
      return;
    }

    if (rightAnswer.capital === capital) {
      return setRigthOrWrong('0');
    }

    return setRigthOrWrong('1');
  };

  return (
    <>
      <h3 className="quiz__question">{rightAnswer.capital} is the capital of</h3>

      <ul className="quiz__list">
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
    </>
  );
}
