import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Albumns from './pages/Albums';
import Contact from './pages/Contact';
import Singles from './pages/Singles';

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/albumns' element={<Albumns></Albumns>}></Route>
        <Route path='/singles' element={<Singles></Singles>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App