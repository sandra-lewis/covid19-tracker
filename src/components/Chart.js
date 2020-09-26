import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalBar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Roboto Condensed';

const Chart = ({ topTenCountries }) => {
  const data = {
    labels: topTenCountries.map((cname) => cname.country),
    datasets: [
      {
        label: 'Confirmed',
        data: topTenCountries.map((cname) => cname.cases),
        backgroundColor: 'rgba(122,186,255,0.9)',
      },
      {
        label: 'Deceased',
        data: topTenCountries.map((cname) => cname.deaths),
        backgroundColor: 'rgba(220,53,69,0.9)',
      },
      {
        label: 'Recovered',
        data: topTenCountries.map((cname) => cname.recovered),
        backgroundColor: 'rgba(102,172,103,0.9)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Top Ten Affected Countries',
      fontSize: 25,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div className="chart-style">
      <HorizontalBar data={data} options={options} />
    </div>
  );
};

Chart.propTypes = {
  topTenCountries: PropTypes.array.isRequired,
};

export default Chart;
