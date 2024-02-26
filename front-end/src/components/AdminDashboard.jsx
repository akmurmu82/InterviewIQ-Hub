import { Box, Heading, Text, Button, background } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import axios from 'axios';
import Loader from './Loader';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const makeDeleteReq = async id => {
    console.log('id:', id);
    try {
      const response = await axios.delete(
        `https://be-interviewiq-hub.onrender.com/admin/guests/${id}`
      );

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  async function getTheUSers() {
    setIsLoading(true);
    try {
      const resp = await axios.get(
        'https://be-interviewiq-hub.onrender.com/admin/guests'
      );

      console.log('resp', resp.data.data);
      setUsers(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTheUSers();
    // console.log(first)
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Banner />
      <Box p={5}>
        <Text fontSize={'28px'} fontWeight="bold">
          Welcome Admin
        </Text>
      </Box>
      {users.map((user, i) => (
        <Box
          key={user.id}
          p={5}
          m={'auto'}
          mt={3}
          boxShadow={'md'}
          width={'80%'}
          bg={'gray.100'}
        >
          <Heading as={'h1'}>Name: {user.name}</Heading>
          <Text mt={3}>Email: {user.email}</Text>
          <Text mt={3}>Phone Number: {user.phoneNo}</Text>
          <Text
            display={'flex'}
            justifyContent={'center'}
            margin={'auto'}
            mt={3}
          >
            {' '}
            Skills:{' '}
            {user.techStack.map((skill, i) => (
              <Text display="inline" key={i}>
                {skill},
              </Text>
            ))}
          </Text>
          <Text mt={3}>Marks: {user.marks}</Text>
          <Text mt={3}>English Fluency: {user.englishFluency}</Text>
          {/* <Button
            p={5}
            bg={'red'}
            mt={5}
            color={'white'}
            fontWeight={'bold'}
            _hover={{ background: 'red.600' }}
            onClick={() => makeDeleteReq(i)}
          >
            DELETE
          </Button> */}
        </Box>
      ))}
    </Box>
  );
}

export default AdminDashboard;
