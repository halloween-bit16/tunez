import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Explore from './pages/Explore';

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App