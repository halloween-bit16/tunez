import { useParams, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import songsData from "../data/songs";

function SongDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundSong = songsData.find((s) => s.id === parseInt(id));
    if (foundSong) {
      setSong(foundSong);
    } else {
      navigate("/explore");
    }
  }, [id, navigate]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!song) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <p>Loading song details...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-purple-950 to-black min-h-screen text-white">
        <NavBar />

        <div className="max-w-5xl mx-auto py-12 px-6 animate-fadeInUp">
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-400 mb-4 hover:underline"
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={song.image}
              alt={song.name}
              className="w-72 h-72 object-cover rounded-lg shadow-lg"
            />

            <div>
              <h1 className="text-4xl font-bold mb-2">{song.name}</h1>
              <p className="text-gray-400 mb-4">{song.desp}</p>

              <p className="mb-2">
                <span className="font-semibold">Genre:</span>{" "}
                {Array.isArray(song.genre) ? song.genre.join(", ") : song.genre}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Language:</span> {song.language}
              </p>

              <div className="flex gap-4">
                {/* Favorite button */}
                <button
                  onClick={toggleFavorite}
                  className={`text-2xl transition ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {isFavorite ? "❤" : "🤍"}
                </button>

                {/* Preview button */}
                <button
                  onClick={() =>
                    alert("This would open a story-style preview in the app 🔊")
                  }
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded transition"
                >
                  Preview
                </button>

                {/* Spotify button */}
                {song.url ? (
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition"
                  >
                    Play on Spotify
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-600 text-white rounded cursor-not-allowed"
                  >
                    Not Available on Spotify
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SongDetails;
