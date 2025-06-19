function Cards({ title, desp, image, language, genre }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{desp}</p>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full">{language}</span>
          {Array.isArray(genre)
            ? genre.map((g, idx) => (
                <span
                  key={idx}
                  className="bg-purple-200 text-purple-800 text-sm px-2 py-1 rounded-full"
                >
                  {g}
                </span>
              ))
            : (
                <span className="bg-purple-200 text-purple-800 text-sm px-2 py-1 rounded-full">
                  {genre}
                </span>
              )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
