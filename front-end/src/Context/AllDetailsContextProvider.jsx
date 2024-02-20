import React, { createContext, useState } from 'react';

export const AllDetails = createContext();

function AllDetailsContextProvider({ children }) {
  const [isTrue, setIsTrue] = useState(false);
  const [userSkills, setUserSkills] = useState([]);

  return (
    <AllDetails.Provider
      value={{ isTrue, setIsTrue, userSkills, setUserSkills }}
    >
      {children}
    </AllDetails.Provider>
  );
}

export default AllDetailsContextProvider;
