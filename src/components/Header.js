import React from 'react';
import coronavirus from '../images/coronavirus.png';

const Header = () => {
  return (
    <header className="shadow-sm d-flex">
      <img src={coronavirus} alt="" className="my-3 ml-3 mr-2 corona-img" />
      <h4 className="mt-3">COVID-19 Tracker</h4>
    </header>
  );
};

export default Header;
