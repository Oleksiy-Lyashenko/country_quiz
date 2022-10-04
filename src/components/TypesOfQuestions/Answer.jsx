import React, { useState } from 'react'
import classNames from 'classnames';

export default function Answer({ country, index, rightAnswer, rigthOrWrong, setRigthOrWrong, clickOnAnswer }) {

  return (
    <li
      className={classNames(
        'quiz__variant',
        { 'quiz__variant--right': rigthOrWrong === '0' },
        { 'quiz__variant--wrong': rigthOrWrong === '1' },
      )}
      key={country.capital}
      onClick={() => clickOnAnswer(country.capital)}>
      <span className="quiz__letter">{index}</span>

      <span className="quiz__answer">{country.name.common}</span>
    </li>
  );
}
