import axios from 'axios';
import { useEffect, useState } from 'react';
import QuizeBlock from './QuizeBlock';

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

  const clickOnNext = () => {
    setCountries([]);
    setRightAnswer([])

    fetchCountries();
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  console.log(rightAnswer);

  return (
    <div className="page">
      <div className="wrapper">
        <div className="quiz">
          <h1 className="quiz__title">country quiz</h1>

          <QuizeBlock countries={countries} rightAnswer={rightAnswer} clickOnNext={clickOnNext}/>
        </div>
      </div>
    </div>
  );
}

export default App;
