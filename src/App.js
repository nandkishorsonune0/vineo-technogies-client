import React from 'react';
import './App.css';
import Main from './Components/Main';
import { NameProvider } from './Components/Context'; // Import the provider

function App() {
  return (
    <NameProvider>
      <Main />
    </NameProvider>
  );
}

export default App;
