import './App.css';
import { useState } from 'react';

import DarkMode from './components/DarkMode'
function App() {
 
  const [dark,setDark] =useState(false);

  return (
    <>
      <DarkMode dark={dark} setDark={setDark}/>
    </>
  );
}

export default App;
