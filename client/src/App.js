import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from './components/Home'
import Nav from './components/Nav'
import './App.css';
function App() {
  return (
    <div>
      <header><><Nav></Nav></></header>
  <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    
    </div>
  );
}

export default App;
