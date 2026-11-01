
function ImageCard({ image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img src={image.url} alt={image.title} className="w-full h-56 object-cover"/>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {image.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {image.description}
        </p>
      </div>

    </div>
  );
}
export default ImageCard;
