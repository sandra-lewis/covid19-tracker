import React, { Fragment } from 'react';
import coronavirus from '../images/coronavirus.png';
import PropTypes from 'prop-types';

const Header = ({ date, loading }) => {
  const lastUpdated = new Date(date).toLocaleString();

  return (
    <Fragment>
      <header className="shadow-sm d-flex">
        <img src={coronavirus} alt="" className="my-3 ml-3 mr-2 corona-img" />
        <h4 className="mt-3">COVID-19 Tracker</h4>
      </header>
      {!loading ? (
        <p className="text-right text-secondary mt-2 mr-3">
          Last Updated: {lastUpdated}
        </p>
      ) : (
        ''
      )}
    </Fragment>
  );
};

Header.propTypes = {
  date: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Header;
