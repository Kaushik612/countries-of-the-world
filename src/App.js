import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';

//Fonts
import '@fontsource/nunito-sans';
import '@fontsource/inter';

//custom theme
import customTheme from './styles/theme';

//App Layout
import AppLayout from './layout/AppLayout';

//React components
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './components/Countries/CountryDetails';


function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<AppLayout/>}>
         <Route index element={<Home/>}></Route>
         <Route path='/country/:name' exact element={<CountryDetails/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
      /* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */
  );
}

export default App;
