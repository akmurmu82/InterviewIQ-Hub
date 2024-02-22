import React, { createContext, useState } from 'react';

export const AllDetails = createContext();

function AllDetailsContextProvider({ children }) {
  const [isTrue, setIsTrue] = useState(false);
  const [userSkills, setUserSkills] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AllDetails.Provider
      value={{
        isTrue,
        setIsTrue,
        userSkills,
        setUserSkills,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </AllDetails.Provider>
  );
}

export default AllDetailsContextProvider;
