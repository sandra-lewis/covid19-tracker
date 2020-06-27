import React from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const Cases = ({
  cases: {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) => {
  return (
    <div className="card-deck mx-5">
      <div className="card card-body shadow text-center">
        <h3 className="card-title">Confirmed</h3>
        <h1 className="text-primary">
          <CountUp end={Number(TotalConfirmed)} duration={2} />
        </h1>
        {NewConfirmed !== 0 ? (
          <h4>
            <span className="badge new-badge mx-auto p-2">
              +<CountUp end={Number(NewConfirmed)} duration={2} />
            </span>
          </h4>
        ) : (
          'No New Cases'
        )}
      </div>
      <div className="card card-body shadow text-center">
        <h3 className="card-title">Deceased</h3>
        <h1 className="text-danger">
          <CountUp end={Number(TotalDeaths)} duration={2} />
        </h1>
        {NewDeaths !== 0 ? (
          <h4>
            <span className="badge new-badge mx-auto p-2">
              +<CountUp end={Number(NewDeaths)} duration={2} />
            </span>
          </h4>
        ) : (
          'No New Deaths'
        )}
      </div>
      <div className="card card-body shadow text-center">
        <h3 className="card-title">Recovered</h3>
        <h1 className="text-success">
          <CountUp end={Number(TotalRecovered)} duration={2} />
        </h1>
        {NewRecovered !== 0 ? (
          <h4>
            <span className="badge new-badge mx-auto p-2">
              +<CountUp end={Number(NewRecovered)} duration={2} />
            </span>
          </h4>
        ) : (
          'No New Recoveries'
        )}
      </div>
    </div>
  );
};

Cases.propTypes = {
  cases: PropTypes.object.isRequired,
};

export default Cases;
