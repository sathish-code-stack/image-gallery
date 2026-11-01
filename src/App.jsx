
import React from "react";
import ImageCard from "./components/ImageCard";

function App() {

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      title: "Beautiful Nature",
      description: "Enjoy the beauty of green mountains and peaceful nature."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
      title: "Mountain View",
      description: "A beautiful view of mountains and a peaceful lake."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      title: "Beach View",
      description: "Relax and enjoy the beautiful blue ocean and beach."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
      title: "Sunrise",
      description: "A lovely sunrise with a beautiful natural landscape."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      title: "Forest",
      description: "Explore the beauty of green trees and forests."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
      title: "Ocean Waves",
      description: "Beautiful ocean waves moving towards the shore."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 px-5 py-10">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">
          My Image Gallery
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Explore beautiful images from nature and the world.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}

        </div>

      </div>
    </>
  );
}

export default App;
