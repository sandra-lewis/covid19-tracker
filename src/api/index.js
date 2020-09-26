import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchGlobal = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);
    return data;
  } catch (err) {}
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data;
  } catch (err) {}
};

export const fetchSortedCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries?sort=cases`);
    return data;
  } catch (err) {}
};

export const fetchCountry = async (country) => {
  try {
    const { data } = await axios.get(`${url}/countries/${country}?strict=true`);
    return data;
  } catch (err) {}
};
