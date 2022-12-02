import React, {useEffect, useState} from 'react'

//Chakra UI Components
import { Input,InputGroup, InputLeftElement, Select} from '@chakra-ui/react'

//Chakra UI Icons
import { SearchIcon } from '@chakra-ui/icons'

const SearchAndFilter = ({handleSearch, handleRegionSearch}) => {

useEffect(() => {
    function initListeners() {
        document.getElementById('search').addEventListener('input', e => {
            fetchSearch(e.target.value);
        });
    }

    initListeners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  const fetchSearch = name => {
        setRegion("");
        handleSearch(name);
  } 

  const fetchRegion = region => {
    setRegion(region);
    handleRegionSearch(region);
  }

  const[region, setRegion] = useState("");

  return (
    <>
        <InputGroup>
        <InputLeftElement
        top="5px"
        pointerEvents='none'
        children={<SearchIcon color='gray.300'/>}
        />
         <Input placeholder='Search for a country...' size={"lg"} shadow="lg" outline={"none"} border="none" width={["100%","100%","50%"]}
           _placeholder={{ opacity: 1, color: 'gray.400' }} id="search"
           marginBottom={["2rem","0","0"]}/>
        </InputGroup>

        <Select placeholder='Filter by Region' value={region} shadow="lg" outline={"none"} border="none" size={"lg"} width={["100%","100%","50%"]} 
        onChange={(e)=> fetchRegion(e.target.value)}>
                <option value='ALL'>All</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
        </Select>
    </>
  )
}

export default SearchAndFilter