import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import Cards from "../components/Cards";

// Assets
import a2 from "../assets/a2.jpg";
import adhm from "../assets/adhm.jpg";
import be from "../assets/be.jpg";
import bf from "../assets/bf.jpg";
import cxcx from "../assets/cxcx.jpg";
import dl from "../assets/dl.jpg";
import fo from "../assets/fo.jpg";
import gb from "../assets/gb.jpg";
import hs from "../assets/hs.jpg";
import iw from "../assets/iw.jpg";
import m from "../assets/m.jpg";
import mmm from "../assets/mmm.jpg";
import s from "../assets/s.jpg";
import shnd from "../assets/shnd.jpg";
import w from "../assets/w.jpg";

function Explore() {
  const allLanguages = ["English", "Hindi"];
  const allGenres = ["Rap", "Party", "Melancholy", "Romance", "R&B"];

  const allSongs = [
    {
      id: 1,
      name: "Blinding Lights",
      desp: "A synth-pop party hit by The Weeknd.",
      language: "English",
      genre: ["Party"],
      image: w,
    },
    {
      id: 2,
      name: "Tum Hi Ho",
      desp: "Emotional ballad from Aashiqui 2.",
      language: "Hindi",
      genre: ["Melancholy", "Romance"],
      image: a2,
    },
    {
      id: 3,
      name: "I Wonder",
      desp: "An introspective anthem by Kanye West exploring ambition and destiny.",
      language: "English",
      genre: ["Rap", "R&B"],
      image: iw,
    },
    {
      id: 4,
      name: "Apna Time Aayega",
      desp: "Desi rap from Gully Boy.",
      language: "Hindi",
      genre: ["Rap"],
      image: gb,
    },
    {
      id: 5,
      name: "Levitating",
      desp: "Funky and futuristic pop by Dua Lipa.",
      language: "English",
      genre: ["Party"],
      image: dl,
    },
    {
      id: 6,
      name: "Channa Mereya",
      desp: "Heartfelt farewell song from Ae Dil Hai Mushkil.",
      language: "Hindi",
      genre: ["Melancholy"],
      image: adhm,
    },
    {
      id: 7,
      name: "Apple",
      desp: "The hottest club anthem by Charlie xcx.",
      language: "English",
      genre: ["Party"],
      image: cxcx,
    },
    {
      id: 8,
      name: "Maula Mere Maula",
      desp: "A soulful Sufi-inspired plea for divine connection and peace.",
      language: "Hindi",
      genre: ["Romance"],
      image: mmm,
    },
    {
      id: 9,
      name: "Nobody",
      desp: "A haunting, vulnerable ballad by Mitski about isolation and desire.",
      language: "English",
      genre: ["Melancholy"],
      image: m,
    },
    {
      id: 10,
      name: "Saudebazi",
      desp: "A playful romantic track by Pritam with a catchy Bollywood vibe.",
      language: "Hindi",
      genre: ["Romance"],
      image: s,
    },
    {
      id: 11,
      name: "Forever Yours",
      desp: "A smooth R&B confession of love and longing by Brent Faiyaz.",
      language: "English",
      genre: ["R&B"],
      image: bf,
    },
    {
      id: 12,
      name: "Subha Hone Na De",
      desp: "A high-energy party anthem from Bollywood’s nightlife scene.",
      language: "Hindi",
      genre: ["Party"],
      image: shnd,
    },
    {
      id: 13,
      name: "BIRDS OF A FEATHER",
      desp: "A dreamy love song embracing eternal connection and fate by Billie Eillish.",
      language: "English",
      genre: ["Romance"],
      image: be,
    },
    {
      id: 14,
      name: "Party All Night",
      desp: "A loud and bold club banger by Honey Singh for nonstop dancing.",
      language: "Hindi",
      genre: ["Party"],
      image: hs,
    },
    {
      id: 15,
      name: "Thinkin Bout You",
      desp: "A tender and emotional R&B reflection on love by Frank Ocean.",
      language: "English",
      genre: ["Romance", "R&B"],
      image: fo,
    },
  ];

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-950 to-black pb-6">
        <NavBar />
      </section>

      {/* Main Content */}
      <section className="bg-black min-h-screen px-10 py-6 text-white">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white p-4 border-r text-black rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Filter Songs</h2>

            {/* Language Filters */}
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
                        : "bg-white text-black"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Genre Filters */}
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
                        : "bg-white text-black"
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
                className="px-4 py-2 bg-indigo-500 text-white rounded"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Songs Grid */}
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
                  <Cards
                    key={song.id}
                    title={song.name}
                    desp={song.desp}
                    image={song.image}
                    language={song.language}
                    genre={song.genre}
                  />
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

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Explore;
