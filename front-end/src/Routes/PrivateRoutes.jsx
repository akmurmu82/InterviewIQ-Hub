import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AllDetails } from '../Context/AllDetailsContextProvider';
import AdminDashboard from '../components/AdminDashboard';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
  const { isAdmin } = useContext(AllDetails);

  return isAdmin ? children : <Navigate to="/" />;
}

export default PrivateRoutes;
