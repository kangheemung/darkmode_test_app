import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// Import your components
import DarkMode from './components/DarkMode';
import Home from './Home';
import Count from './components/Count';
import Field from './components/Field';
import Todo from './components/Todo';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';

// App component
function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "App darkmode" : "App lightmode"}>
      <Router>
        <DarkMode dark={dark} setDark={setDark}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/colorSwitcher" element={<ColorSwitcher />} />
          <Route path="/searchFilter" element={<SearchFilter />} />
          <Route path="/Field" element={<Field />} />
          <Route path="/Count" element={<Count />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
