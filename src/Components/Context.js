// Context.js
import React, { createContext, useState } from 'react';

// Create a context
export const NameContext = createContext();

// Create a provider component
export const NameProvider = ({ children }) => {
  const [name, setName] = useState("Nandkishor");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
