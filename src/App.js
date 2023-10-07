import React from 'react';
import contextTheme from './context/contextTHeme';
import ThemeToggler from './comp/themeToggler';
import Herosection from './comp/herosection';
import { useState } from 'react';

import './App.css';


function App() {
  const themeHook = useState("light");
  return (
    <div className="App">
      <contextTheme.Provider value={themeHook}>
      <ThemeToggler/>
      <Herosection/>
      </contextTheme.Provider>
      

    </div>
  );
}

export default App;
