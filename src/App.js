import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';
import Cases from './components/Cases';
import Chart from './components/Chart';
import Footer from './components/Footer';
import Loading from './components/Loading';
import axios from 'axios';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cases, setCases] = useState({});
  const [date, setDate] = useState('');
  const [topTen, setTopTen] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const {
        data: { Global, Countries, Date },
      } = await axios.get('https://api.covid19api.com/summary');

      setDate(Date);
      setCountries(Countries);
      setCases(Global);

      // Pick the top ten affected countries
      setTopTen(
        [...Countries]
          .sort((c1, c2) => c2.TotalConfirmed - c1.TotalConfirmed)
          .slice(0, 10)
      );

      setLoading(false);
    };

    fetchData();
  }, []);

  const countrySelector = async (selectedIndex) => {
    const {
      data: { Global, Countries },
    } = await axios.get('https://api.covid19api.com/summary');

    if (selectedIndex === 0) {
      // Global is the first option in the datalist
      setCases(Global);
    } else {
      // Set cases based on the country's index in the datalist
      setCases(Countries[selectedIndex - 1]);
    }
  };

  return (
    <div className="wrapper">
      <Header date={date} />
      {loading === true ? (
        <Fragment>
          <Loading />
          <h4 className="text-center mt-2">Updating the data...</h4>
        </Fragment>
      ) : (
        <Fragment>
          <Countries countries={countries} countrySelector={countrySelector} />
          <Cases cases={cases} />
          <Chart topTenCountries={topTen} />
        </Fragment>
      )}

      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default App;
