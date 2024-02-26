import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { List, ListItem, ListIcon } from '@chakra-ui/react';

import { MdCheckCircle } from 'react-icons/md';

function Description() {
  return (
    <Box p={3}>
      <Text
        fontSize={{ base: '18px', sm: '26px', md: '32px' }}
        fontWeight="bold"
        textAlign="left"
        margin={{ base: '2px', sm: '3px', md: '5px' }}
        color="#3a3e48"
      >
        Exclusive Opportunity,🤝 Be a{' '}
        <Text display="inline" color="#af2b2b">
          Guest
        </Text>{' '}
        in Our{' '}
        <Text display="inline" color="#af2b2b">
          21-days Interview Challenge!🎯
        </Text>
      </Text>
      <hr />
      <Text
        margin={{ base: '20px 2px', sm: '20px 3px', md: '20px 5px' }}
        fontSize={{ base: '12px', sm: '16px' }}
        fontWeight={500}
        textAlign="left"
        color="#5f6676"
      >
        🎓 Let's be our guest for a day in the highly acclaimed 21-day Interview
        Preparation Challenge!
        <Text>
          🛠️ Simply fill out this form to secure your spot and get ready to
          supercharge your interview skills.
        </Text>
        <Text>
          🏆 By filling this form you need to Attempt 5 Ques and that is
          mandatory for joining us!
        </Text>
        <Text mt={5}>🔥 Group members -</Text>
        <List spacing={3} ml={{ base: 20, md: 20 }}>
          {/* You can also use custom icons from react-icons */}
          <Box
            display={{ base: 'grid', md: 'flex' }}
            gap={{ base: 1, md: 3 }}
            mt={2}
          >
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Supriya Singh
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Mahin Malek
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Kirthika Jayaraman
            </ListItem>
          </Box>
          <Box display={{ base: 'grid', md: 'flex' }} gap={{ base: 1, md: 3 }}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Vishal Tiwari
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Amit Kumar Murmu
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Karan Chauhan
            </ListItem>
          </Box>
        </List>
      </Text>
      <hr />
      <hr />
    </Box>
  );
}

export default Description;
