import boxImg from '../../assets/box_img.svg';
import { Question } from '../Question';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import * as countriesActions from '../../features/countriesSlice';
import * as questionActions from '../../features/questionSlice';

export const QuestionBlock: React.FC = () => {
  const dispatch = useAppDispatch();
  const { variants, countries } = useAppSelector((state) => state.question);

  useEffect(() => {
    if (countries.length > 0) {
      dispatch(questionActions.setTypeOfQuestion());
      dispatch(questionActions.addVariants());
    }
  }, [countries, dispatch]);

  return (
    <>
      <img src={boxImg} alt="" className="quiz__img" />

      {variants.length > 0 ? (
        <Question />
      ) : (
        <div className="quiz__loader-container">
          <ClipLoader color="#6267d0b3" loading size="55px" className="quiz__loader" />
        </div>
      )}
    </>
  );
};
