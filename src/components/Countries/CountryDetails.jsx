import React,{useEffect, useState} from 'react';

//React router
import { useLocation, useParams } from 'react-router-dom';

//Chakra UI Components
import { Flex, Box, Image, Text, Heading, List, ListItem, ListIcon, Button} from '@chakra-ui/react'

//Chakra UI Icons
import {CheckCircleIcon} from '@chakra-ui/icons';

import { API_URL_CODES } from '../../constants';

//Axios
import axios from 'axios';

const CountryDetails = () => {
  const {state} = useLocation();
  const params = useParams();
  const {country} = state || {};

  const [domains, setDomains] = useState('');
  const [currencies, setCurrencies] = useState('');
  const [languages, setLanguages] = useState('');
  const[borders, setBorders] = useState([]);

  useEffect(()=> {

    (async()=> {

        const countryCodes = await axios.get(API_URL_CODES(country?.borders));
        setBorders(countryCodes.data.map((country => country.name.common)));
        setDomains(country?.tld.join(','));
        setCurrencies(Object.values(country?.currencies)
                        .map((currency)=> currency.name)
                        .join(' , '));

        setLanguages(Object.values(country?.languages)
                    .map((language)=> language)
                    .join(' , '));

    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[params])

  return (
    <>
    <Flex color='white' display={"flex"} flexDirection={["column","column", "column", "row"]} padding={["1rem","2rem","4rem"]} gap="4">
      <Box flex="1" size='150px'>
        <Image src={country?.flags.svg} alt={country?.name.common}/>
      </Box>
      <Box flex="1" padding={["1rem","2rem","2rem"]} width="full">
        <Heading as={"h1"} marginBottom={"2rem"}>{country?.name.common}</Heading>
        <Box as="div" display={"flex"} flexDirection={["column","column", "row"]} justifyContent={"space-between"}>
            <List spacing={5}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Native Name :</Text> <Text as="div" display={"inline-block"}>{country?.name.official}</Text>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Population :</Text> <Text as="div" display={"inline-block"}>{country?.population}</Text>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Region:</Text> <Text as="div" display={"inline-block"}>{country?.region}</Text>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Sub Region:</Text> <Text as="div" display={"inline-block"}>{country?.subregion}</Text>
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Capital:</Text> <Text as="div" display={"inline-block"}>{country?.capital[0]}</Text>
                </ListItem>
            </List>
            <List marginTop={["3rem","0","0"]}spacing={5}>
                <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        <Text as="span">Top Level Domain :</Text> <Text as="div" display={"inline-block"}>{domains}</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        <Text as="span">Currencies :</Text> <Text as="div" display={"inline-block"}>{currencies}</Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckCircleIcon} color='green.500' />
                        <Text as="span">Languages:</Text> <Text as="div" display={"inline-block"}>{languages}</Text>
                    </ListItem>
            </List>
        </Box>
        <Box as="div" display={"flex"} flexDirection={["column","column", "row"]} marginTop={"5rem"}>
            <Box as="div" display={"flex"} justifyContent="center" alignItems="center">
                <Text as="span" flex="1">Border Countries :</Text>
            </Box>     
            <Box as="div" display={"flex"} justifyContent="center" alignItems="center" flexDirection="row" marginTop={["1.25rem","0","0"]}>
            {borders.map((border)=> (
                <Button marginRight={"1.25rem"} size="md" shadow="lg">
                    {border}
                </Button>
            ))}
            </Box>
        </Box>
      </Box>
    </Flex>
    </>
  )
}

export default CountryDetails