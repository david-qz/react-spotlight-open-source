import { useEffect, useState } from 'react';

async function fetchData(countries) {
  const countryDataArray = await Promise.all(
    countries.map(iso3 => {
      return fetch(`http://api.worldbank.org/v2/countries/${iso3}/indicators/NY.GDP.MKTP.CD?per_page=100&format=json`)
        .then(response => response.json())
        .then(data => data[1]);
    })
  );

  // Collect all data points into a mapping of year => { year, <data points> }
  const yearMap = new Map();
  for (const countryData of countryDataArray) {
    for (const { date, countryiso3code, value } of countryData) {
      if (!yearMap.has(date)) yearMap.set(date, { date });
      yearMap.get(date)[countryiso3code] = value;
    }
  }

  // Collect map entries into an array
  let data = [];
  for (const [, entry] of yearMap) {
    data.push(entry);
  }

  return data;
}

export default function useCountriesGDP(countries) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(countries).then(data => setData(data));
  }, [countries]);

  return data;
}
