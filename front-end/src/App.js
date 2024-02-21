import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        margin="10px auto"
        boxShadow="md"
        pb={5}
        width={{ base: '90%', sm: '80%', md: '50%' }}
      >
        <AllRoutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
