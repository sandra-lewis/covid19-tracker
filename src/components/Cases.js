import React from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const Cases = ({
  counts: { cases, todayCases, deaths, todayDeaths, recovered, todayRecovered },
}) => {
  return (
    <div className="mx-5 d-flex flex-wrap justify-content-center">
      <div className="card-deck">
        <div className="card card-body align-items-center">
          <h3 className="card-title">Confirmed</h3>
          <h1 className="text-primary">
            <CountUp end={Number(cases)} duration={2} />
          </h1>
          {todayCases !== 0 ? (
            <h4>
              <span className="badge new-badge mx-auto p-2">
                +<CountUp end={Number(todayCases)} duration={2} />
              </span>
            </h4>
          ) : (
            'No New Cases'
          )}
        </div>
        <div className="card card-body align-items-center">
          <h3 className="card-title">Deceased</h3>
          <h1 className="text-danger">
            <CountUp end={Number(deaths)} duration={2} />
          </h1>
          {todayDeaths !== 0 ? (
            <h4>
              <span className="badge new-badge mx-auto p-2">
                +<CountUp end={Number(todayDeaths)} duration={2} />
              </span>
            </h4>
          ) : (
            'No New Deaths'
          )}
        </div>
        <div className="card card-body align-items-center">
          <h3 className="card-title">Recovered</h3>
          <h1 className="text-success">
            <CountUp end={Number(recovered)} duration={2} />
          </h1>
          {todayRecovered !== 0 ? (
            <h4>
              <span className="badge new-badge mx-auto p-2">
                +<CountUp end={Number(todayRecovered)} duration={2} />
              </span>
            </h4>
          ) : (
            'No New Recoveries'
          )}
        </div>
      </div>
    </div>
  );
};

Cases.propTypes = {
  counts: PropTypes.object.isRequired,
};

export default Cases;
