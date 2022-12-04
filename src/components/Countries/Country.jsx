import React from 'react'

//Chakra UI Components
import { SimpleGrid, Card, Heading, CardBody,List, ListItem, ListIcon,Stack, Text, Image } from '@chakra-ui/react';

//React Router
import { Link } from 'react-router-dom';

//Chakra UI Icons
import {CheckCircleIcon} from '@chakra-ui/icons';

const Country = ({countries}) => {
  return (
    <>
    <SimpleGrid columns={[1, 2, 2, 4]} spacing='40px' padding="2rem">
    {countries.map((country, index)=> (
        <Link // <-- use Link component
        to={`/country/${country.name.common}`}
        state={{ country }}
        _hover={{
          textDecoration: "none"
        }}
        key={index}
        >
        <Card shadow={"2xl"} cursor="pointer"  _hover={{
          shadow: 'md',
          transform: 'translateY(-5px)',
          transitionDuration: '0.2s',
          transitionTimingFunction: "ease-in-out"
        }}>
        <CardBody>
            <Image src={country.flags.png} alt={country.name.common} borderRadius='lg' w={"full"} h={"250px"}/>
            <Stack mt='6' spacing='3'>
                <Heading size='lg'>{country.name.common}</Heading>
                <List spacing={3}>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                <Text as="span">Population :</Text> {(country?.population).toLocaleString()}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Region:</Text> {country.region}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    <Text as="span">Capital:</Text> {country.capital[0]}
                </ListItem>
                </List>
            </Stack>
        </CardBody>
        </Card>
        </Link>
    ))}
    </SimpleGrid>
  </>
  )
}

export default Country