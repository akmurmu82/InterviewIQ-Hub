import React, { useContext } from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Banner from './components/Banner';
import Description from './components/Description';
import Form from './components/Form';
import { AllDetails } from './Context/AllDetailsContextProvider';
import Assesment from './components/Assesment';
// import AllRoutes from './Routes/AllRoutes';

function App() {
  const { isTrue } = useContext(AllDetails);

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        margin="10px auto"
        boxShadow="md"
        pb={5}
        width={{ base: '90%', sm: '80%', md: '50%' }}
      >
        {isTrue ? (
          <Assesment />
        ) : (
          <>
            <Banner />
            <Description />
            <Form />
          </>
        )}

        {/* <AllRoutes /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
