import React from 'react';
import {
  Heading ,
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

//React Router
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')} px={4} shadow="lg" w="full">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}  padding="2rem">
          <Box><Link to="/"><Heading fontSize={["20px"]}>Where in the World?</Heading></Link></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar