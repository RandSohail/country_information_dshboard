import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { FALLBACK_COUNTRIES } from './helper/constant';
import {
  SearchInput,
  CountryCard,
  NavBar,
  Loading,
  Error,
  SelectContinent
} from './components';
import { types, useCountries } from './helper';
import './App.scss';

export default function App() {
  const { data, loading, error } = useCountries();
  const [filterName, setFilterName] = useState('');
  const [filterContinent, setFilterContinent] = useState('All Region');
  const [filteredData, setFilteredData] = useState(data ?? FALLBACK_COUNTRIES);

  useEffect(() => {
    if (data) {
      const filteredRegionName = data.countries.filter(
        (item: types.CountryObject) =>
          item.name.toLocaleLowerCase().startsWith(filterName) &&
          (filterContinent === 'All Region' ||
            item.continent.name === filterContinent)
      );
      setFilteredData(filteredRegionName);
    }
  }, [filterName, data, filterContinent]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <div className="main-container">
      <NavBar />
      <div className="search-container">
        <SearchInput setFilterName={setFilterName} />
        <SelectContinent
          filterContinent={filterContinent}
          setFilterContinent={setFilterContinent}
        />
      </div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        {data && filteredData.length === 0 ? (
          <h2>No result</h2>
        ) : (
          filteredData.map((data: types.CountryObject) => (
            <CountryCard key={data.name} {...data} />
          ))
        )}
      </Box>
    </div>
  );
}
