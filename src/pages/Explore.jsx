import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import Cards from "../components/Cards";
import allSongs from "../data/songs";
import SongModal from "../components/SongModal";

function Explore() {
  const allLanguages = ["English", "Hindi"];
  const allGenres = ["Rap", "Party", "Melancholy", "Romance", "R&B"];

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  const toggleTag = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredSongs = allSongs.filter((song) => {
    const langMatch =
      selectedLanguages.length === 0 ||
      selectedLanguages.includes(song.language);
    const genreMatch =
      selectedGenres.length === 0 ||
      (Array.isArray(song.genre)
        ? song.genre.some((g) => selectedGenres.includes(g))
        : selectedGenres.includes(song.genre));
    const searchMatch = song.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return langMatch && genreMatch && searchMatch;
  });

  return (
    <>
      <section className="bg-gradient-to-b from-purple-950 to-black pb-6">
        <NavBar />
      </section>

      <section className="bg-black min-h-screen px-10 py-6 text-white">
        <div className="flex">
          <aside className="w-64 bg-gray-800 p-4 border-r border-gray-700 text-white rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Filter Songs</h2>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {allLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() =>
                      toggleTag(lang, selectedLanguages, setSelectedLanguages)
                    }
                    className={`px-3 py-1 rounded-full border ${
                      selectedLanguages.includes(lang)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {allGenres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() =>
                      toggleTag(genre, selectedGenres, setSelectedGenres)
                    }
                    className={`px-3 py-1 rounded-full border ${
                      selectedGenres.includes(genre)
                        ? "bg-green-500 text-white"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={() => {
                  setSelectedLanguages([]);
                  setSelectedGenres([]);
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          <main className="flex-1 pl-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Songs</h1>
              <input
                type="text"
                placeholder="Search songs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-1 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSongs.length > 0 ? (
                filteredSongs.map((song) => (
                  <div
                    key={song.id} 
                    onClick={() => setSelectedSong(song)}
                    className="cursor-pointer animate-fadeInUp"
                  >
                    <Cards
                      title={song.name}
                      desp={song.desp}
                      image={song.image}
                      language={song.language}
                      genre={song.genre}
                      songId={song.id} // ✅ this enables the ❤️
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  No songs match the selected filters.
                </p>
              )}
            </div>
          </main>
        </div>
      </section>

      <Footer />

      {selectedSong && (
        <SongModal song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </>
  );
}

export default Explore;
