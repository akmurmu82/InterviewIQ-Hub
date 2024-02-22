import { Box, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Banner from './Banner';
import axios from 'axios';

function AdminDashboard() {
  async function getTheUSers() {
    try {
      const resp = await axios.get('https://be-interviewiq-hub.onrender.com/');

      console.log('resp', resp.data);
      console.log('first');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTheUSers();
  }, []);

  return (
    <Box>
      <Banner />
      <Box p={5}>
        <Text fontSize={'28px'} fontWeight="bold">
          Welcome Admin
        </Text>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
