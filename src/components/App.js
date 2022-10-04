import axios from 'axios';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import boxImg from './assets/box_img.svg';
import Question1 from './TypesOfQuestions/Question1';

function App() {
  const [countries, setCountries] = useState([]);
  const [rightAnswer, setRightAnswer] = useState({});

  const fetchCountries = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/all`);
    const arr = [];

    for (let i = 0; i < 4; i++) {
      const number = Math.floor(Math.random() * (res.data.length - 1));
      const country = res.data[number];

      arr.push(country);
    }

    setCountries([...arr]);
    setRightAnswer({ ...arr[Math.floor(Math.random() * 3)] });
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(rightAnswer);

  return (
    <div className="page">
      <div className="wrapper">
        <div className="quiz">
          <h1 className="quiz__title">country quiz</h1>

          <div className="quiz__block">
            <img src={boxImg} alt="" className="quiz__img" />

            {countries.length !== 0 ? (
              <Question1 countries={countries} rightAnswer={rightAnswer} />
            ) : (
              <div className="quiz__loader-container">
                <ClipLoader color="#6267d0b3" loading size="55" className="quiz__loader" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
