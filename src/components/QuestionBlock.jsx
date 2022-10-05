import boxImg from './assets/box_img.svg';
import Question from './Question';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';

export default function QuestionBlock({ countOfAnswers, countries, rightAnswer, clickOnNext, countAnswers}) {
  const [typeOfQuestion, setTypeOfQuestion] = useState();

  const changeTypeOfQuestion = async () => {
    const number = await Math.round(Math.random() * 9)
    setTypeOfQuestion(number);
  }

  useEffect(() => {
    changeTypeOfQuestion()
  }, [])

  return (
    <>
      <img src={boxImg} alt="" className="quiz__img" />

      {countOfAnswers.common < 5 &&
        (countries.length !== 0 ? (
          <Question
            countries={countries}
            rightAnswer={rightAnswer}
            clickOnNext={clickOnNext}
            countAnswers={countAnswers}
            countOfAnswers={countOfAnswers}
            changeTypeOfQuestion={changeTypeOfQuestion}
            typeOfQuestion={typeOfQuestion}
          />
        ) : (
          <div className="quiz__loader-container">
            <ClipLoader color="#6267d0b3" loading size="55px" className="quiz__loader" />
          </div>
        ))}
    </>
  );
}
