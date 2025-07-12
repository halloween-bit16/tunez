import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./frontend/pages/Explore";
import SongDetails from "./frontend/pages/SongDetails";
import Favourites from "./frontend/pages/Favourites";
import Home from "./frontend/pages/Home";
import Contact from "./frontend/pages/Contact";
import React, { useEffect } from 'react';


function App() {

  useEffect(() => {
  fetch('http://localhost:5000/')
    .then(res => res.text())
    .then(data => console.log(data));
}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/song/:id" element={<SongDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/song/:id" element={<SongDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
