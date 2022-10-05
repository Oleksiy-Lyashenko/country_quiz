import { useState } from 'react';
import FinishBlock from './FinishBlock';
import QuestionBlock from './QuestionBlock';

export default function QuizeBlock({ countries, rightAnswer, clickOnNext }) {
  const [countOfAnswers, setCountOfAnswers] = useState({
    right: 0,
    common: 0,
  });

  const countAnswers = (capital) => {
    if (capital === rightAnswer.capital) {
      return setCountOfAnswers({
        right: countOfAnswers.right + 1,
        common: countOfAnswers.common + 1,
      });
    }

    return setCountOfAnswers({
      ...countOfAnswers,
      common: countOfAnswers.common + 1
    })
  }

  const clickTryAgain = () => {
    setCountOfAnswers({
      right: 0,
      common: 0,
    });
    clickOnNext()
  }

  return (
    <div className="quiz__block">
      {countOfAnswers.common < 5 ? (
        <QuestionBlock
          countries={countries}
          rightAnswer={rightAnswer}
          clickOnNext={clickOnNext}
          countAnswers={countAnswers}
          countOfAnswers={countOfAnswers}
        />
      ) : (
        <FinishBlock countOfAnswers={countOfAnswers} clickTryAgain={clickTryAgain} />
      )}
    </div>
  );
}
