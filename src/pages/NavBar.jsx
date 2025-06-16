import { useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    } 

    const handleAlbumns = () => {
        navigate('/albumns');
    }

    const handleContact = () => {
        navigate('/contact');
    }

    const handleSingles = () => {
      navigate('/singles');
    }

  return (
    <nav className="bg-transparent text-white px-6 py-4 flex justify-between items-center">
      <h1 className=" text-2xl font-bold cursor-pointer" onClick={handleHome}>Tunez</h1>
      <div className="flex space-x-6">
        <h3 className="hover:text-gray-400 cursor-pointer" onClick={handleAlbumns}>Albums</h3>
        <h3 className="hover:text-gray-400 cursor-pointer" onClick={handleSingles}>Singles</h3>
        <h3 className="hover:text-gray-400 cursor-pointer" onClick={handleContact}>Contact</h3>
      </div>
    </nav>
  );
}

export default NavBar;
