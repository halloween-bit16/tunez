import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import SongDetails from "./pages/SongDetails";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
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
