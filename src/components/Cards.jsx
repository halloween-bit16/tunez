function Cards({ title, desp, image, cat }){
    return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="flex justify-between">
        <p className="text-gray-600">{desp}</p> 
        <p className="text-gray-800 bg-gray-400 rounded p-0.5 px-1">{cat}</p>
        </div>
      </div>
    </div>
  );
}
export default Cards