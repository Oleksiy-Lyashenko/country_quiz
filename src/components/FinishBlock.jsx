import endImg from './assets/end_img.svg';

export default function FinishBlock({ countOfAnswers, clickTryAgain }) {
  return (
    <div className="quiz__finish">
      <img src={endImg} alt="" className="quiz__finish-img" />
      <span className="quiz__question quiz__question--end">Results</span>
      <span className="quiz__result">
        You got{' '}
        <span
          className={
            countOfAnswers.right >= 3
              ? 'quiz__count-of-result--big'
              : 'quiz__count-of-result--small'
          }>
          {countOfAnswers.right}
        </span>{' '}
        correct answers
      </span>
      <button className="quiz__finish-button" onClick={clickTryAgain}>
        Try again
      </button>
    </div>
  );
}
