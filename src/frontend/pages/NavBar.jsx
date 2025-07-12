import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black border-b border-gray-800 shadow-lg">
      <div className="text-white text-2xl font-bold tracking-wide">
        <Link to="/">🎶 Tunez</Link>
        
      </div>
      <div className="space-x-6">
        <Link
          to="/"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          to="/explore"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Explore
        </Link>
        <Link
          to="/favourites"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Favourites
        </Link>
        <Link
          to="/contact"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
