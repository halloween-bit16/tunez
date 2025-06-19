import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from 'lucide-react';  // lucide icons for clean hamburger icon
import Explore from './Explore.jsx';

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHome = () => navigate('/');
  const handleContact = () => navigate('/contact');
  const handleExplore = () => navigate('/explore');

  return (
    <nav className="bg-transparent text-white px-6 py-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={handleHome}
      >
        <div class="flex items-center space-x-2">
  <span class="text-2xl animate-spin-slow">📀</span>
  <h1 class="text-white text-xl font-bold">Tunez</h1>
</div>
      </h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        <h3 className="hover:text-gray-400 cursor-pointer" onClick={handleExplore}>Explore</h3>
        <h3 className="hover:text-gray-400 cursor-pointer" onClick={handleContact}>Contact</h3>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-black bg-opacity-80 rounded-lg p-4 space-y-4 text-right z-10">
          <h3 className="hover:text-gray-400 cursor-pointer" onClick={() => {handleExplore(); setIsOpen(false);}}>Explore</h3>
          <h3 className="hover:text-gray-400 cursor-pointer" onClick={() => {handleContact(); setIsOpen(false);}}>Contact</h3>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
