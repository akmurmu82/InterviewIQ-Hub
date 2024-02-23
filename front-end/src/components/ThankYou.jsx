import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Banner from './Banner';

function ThankYou() {
  return (
    <Box textAlign={'center'}>
      <Banner />
      <Text
        color={'#118'}
        fontSize={{ base: 16, sm: 18, md: 26 }}
        m={'auto'}
        mt={10}
        p={{ base: 1, md: 3 }}
        fontWeight={600}
        border={'2px dashed #e37272'}
        borderRadius={10}
        width={'max-content'}
      >
        Thank You for your Interest!💫
      </Text>
      <Text
        color={'#457'}
        fontSize={16}
        p={3}
        fontWeight={600}
        textAlign={'left'}
      >
        🎉 We're excited to connect with you soon. Keep an eye on your email
        inbox, as we'll be reaching out to you shortly.
      </Text>
      <Text
        color={'#457'}
        textAlign={'left'}
        fontSize={16}
        p={3}
        fontWeight={600}
      >
        📧 Stay active on your email to ensure you don't miss any important
        updates from us. We look forward to connecting with you!"
      </Text>
      <Flex padding={4} justifyContent={'end'}>
        <Text
          color={'#7f75aa'}
          width={'max-content'}
          fontSize={12}
          mt={3}
          fontWeight={600}
          borderBottom={'1px solid #ccc'}
        >
          Crafted with passion by Mahin Malek🌟 & Amit Kumar Murmu⚡
        </Text>
      </Flex>
      <Text textAlign={'right'} padding={3} pt={0}>
        🚀🚀🚀
      </Text>
    </Box>
  );
}

export default ThankYou;
