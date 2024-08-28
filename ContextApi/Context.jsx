"use client" ;
import { createContext, useContext, useState } from 'react';

const UserCreateContext = createContext();

export  function ContextApi({ children }) {

  const [userState, setUserState] = useState('');

  return (
    <UserCreateContext.Provider value={{ userState , setUserState }}>
      {children}
    </UserCreateContext.Provider>
  );
}

export  const UserContext = () => useContext(UserCreateContext) 
