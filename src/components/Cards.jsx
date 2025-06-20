import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function Cards({ title, desp, image, language, genre, songId }) {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFav = favourites.includes(songId);

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      {/* ❤️ Favourite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering outer click (e.g., modal)
          toggleFavourite(songId);
        }}
        className={`absolute top-3 right-3 text-2xl transition ${
          isFav ? "text-red-500" : "text-gray-400"
        }`}
      >
        {isFav ? "❤️" : "🤍"}
      </button>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-400 text-sm mb-2">{desp}</p>
      <div className="text-sm text-gray-300">
        <span className="mr-2">🎧 {language}</span>
        <span>🎵 {Array.isArray(genre) ? genre.join(", ") : genre}</span>
      </div>
    </div>
  );
}

export default Cards;
