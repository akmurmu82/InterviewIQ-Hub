import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Form from '../components/Form';
import Assesment from '../components/Assesment';
import ThankYou from '../components/ThankYou';

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
            <Description />
            <Form />
          </>
        }
      />
      <Route path="/assessment" element={<Assesment />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default AllRoutes;
