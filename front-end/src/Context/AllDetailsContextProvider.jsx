import React, { createContext, useRef, useState } from 'react';

export const AllDetails = createContext();

function AllDetailsContextProvider({ children }) {
  const [isTrue, setIsTrue] = useState(false);
  const [userSkills, setUserSkills] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleMarks = useRef(0);
  const marksRef = useRef(0);
  const emailRef = useRef('');

  return (
    <AllDetails.Provider
      value={{
        isTrue,
        setIsTrue,
        userSkills,
        setUserSkills,
        isAdmin,
        setIsAdmin,
        handleMarks,
        marksRef,
        emailRef,
      }}
    >
      {children}
    </AllDetails.Provider>
  );
}

export default AllDetailsContextProvider;
