import { useAppSelector } from "../../app/hooks";

export const TypeOfQuestion: React.FC = () => {
  const { typeOfQuestion, rightAnswer} = useAppSelector(state => state.question)

  if (!rightAnswer) {
    return null;
  }

  return (
    <>
      {typeOfQuestion < 5 ? (
        <>
          <img src={rightAnswer.flags.svg} alt="" className="quiz__flag" />

          <h3 className="quiz__question">Which country does this flag belong to?</h3>
        </>
      ) : (
        <h3 className="quiz__question">{rightAnswer.capital} is the capital of</h3>
      )}
    </>
  );
}
