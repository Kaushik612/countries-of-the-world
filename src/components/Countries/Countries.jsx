import React, {useEffect, useState} from 'react'

//axios
import axios from 'axios';

//Chakra UI Components
import {Box} from '@chakra-ui/react'

//React Components
import SearchAndFilter from '../SearchAndFilter/SearchAndFilter';

//Constants
import { API_URL_ALL, API_URL_NAME, API_URL_REGION } from '../../constants';
import Skeleton from '../Skeleton/Skeleton';
import Country from './Country';

const Countries = () => {
  const [countryData, setCountryData] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchCountries = async() => {
        const response = await axios.get(API_URL_ALL);
        const data = await response.data;
        setCountryData(data);
        setLoading(false);
    }

    countryData.length === 0 ? fetchCountries() : setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const handleRegionSearch = async(region)=> {
    setLoading(true);
    const filteredCountries =
    region === 'ALL' 
    ? await axios.get(API_URL_ALL)
    : await axios.get(API_URL_REGION(region));

    const response = await filteredCountries.data;
    setCountryData(response);
    setLoading(false);

  }

  const handleSearch = async (name)=> {
    setLoading(true);
    const filteredCountries = 
    name === '' 
    ? await axios.get(API_URL_ALL)
    : await axios.get(API_URL_NAME(name));

    const response = await filteredCountries.data;
    setCountryData(response);
    setLoading(false);
  }

  return (
    <>
    <Box 
    as="div" 
    display="flex" 
    justifyContent="space-between" 
    padding="2rem" 
    flexDirection={["column", "column", "row"]}
    marginTop={["-2rem","0","0"]}
    >
    <SearchAndFilter handleSearch={handleSearch} handleRegionSearch={handleRegionSearch}/>
    </Box>
    {loading ? (
        <Skeleton/>
    ) : 
      <Country countries={countryData}/>
    }
    </>
  )
}

export default Countries