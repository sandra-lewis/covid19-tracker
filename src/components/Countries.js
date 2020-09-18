import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Countries = ({ countries, countrySelector }) => {
  const [country, setCountry] = useState('Global');

  const onChange = (e) => {
    const countries = document.getElementById('country-names');
    for (let index = 0; index < countries.options.length; index++) {
      // Check if the entered value matches any option in the datalist
      if (e.target.value === countries.options[index].value) {
        setCountry(e.target.value);
        countrySelector(index); // Pass index of the datalist option
      }
    }
  };

  return (
    <Fragment>
      <form className="form-inline justify-content-center mt-5">
        <div>
          <input
            type="text"
            list="country-names"
            className="form-control"
            placeholder="Search"
            onChange={onChange}
          />
          <datalist id="country-names">
            <option value="Global">Global</option>
            {countries.map((place) => (
              <option key={place.CountryCode} value={place.Country}>
                {place.Country}
              </option>
            ))}
          </datalist>
        </div>
      </form>
      <h3 className="text-center my-4">{country}</h3>
    </Fragment>
  );
};

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  countrySelector: PropTypes.func.isRequired,
};

export default Countries;
