import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import Banner from './Banner';

function ThankYou() {
  return (
    <Box>
      <Banner />
      <Text>Thank You for your Interest!</Text>
    </Box>
  );
}

export default ThankYou;
