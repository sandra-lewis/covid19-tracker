import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';
import Cases from './components/Cases';
import Chart from './components/Chart';
import Footer from './components/Footer';
import Loading from './components/Loading';
import {
  fetchGlobal,
  fetchCountries,
  fetchSortedCountries,
  fetchCountry,
} from './api';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cases, setCases] = useState({});
  const [topTen, setTopTen] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const countries = await fetchCountries();
      setCountries(countries);

      const global = await fetchGlobal();
      setCases(global);

      const sortedCountries = await fetchSortedCountries();
      // Pick the top ten affected countries
      setTopTen(sortedCountries.slice(0, 10));

      setLoading(false);
    };

    fetchData();
  }, []);

  const countrySelector = async (selectedValue) => {
    if (selectedValue === 'Global') {
      const global = await fetchGlobal();
      setCases(global);
    } else {
      const country = await fetchCountry(selectedValue);
      setCases(country);
    }
  };

  return (
    <div className="wrapper">
      <Header />
      {loading === true ? (
        <Loading />
      ) : (
        <Fragment>
          <Countries countries={countries} countrySelector={countrySelector} />
          <Cases counts={cases} />
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
