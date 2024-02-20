import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Form from '../components/Description';
import Assesment from '../components/Assesment';

function AllRoutes() {
  return (
    <Routes>
      <Route
        to="/"
        element={
          <>
            <Banner />
            <Description />
            <Form />
          </>
        }
      />
      <Route to="/assessment" element={<Assesment />} />
    </Routes>
  );
}

export default AllRoutes;
