import React from "react";

function AnimeCard({ anime, isUpcoming = false }) {
  return (
    <div
      title={anime?.title}
      className="min-[400px]:w-auto min-[400px]:max-w-[220px]   bg-[#1c1c2c] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200"
    >
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-full h-[280px] object-cover"
      />
      <div className="p-3 text-white">
        <h2 className="text-sm font-semibold mb-1 truncate">{anime?.title}</h2>
        <div className="text-xs text-gray-400">
          {anime?.type} • {anime?.duration || "24m"}
        </div>
        <div className="flex items-center gap-2 mt-1 text-xs">
          <span
            className={`bg-gray-500 text-white px-2 py-0.5 rounded truncate max-w-[120px] ${
              isUpcoming ? "inline-block" : "hidden"
            } `}
          >
            {anime?.aired?.string || "?"}{" "}
          </span>

          <span
            className={`bg-green-600 text-white px-2 py-0.5 rounded ${
              !isUpcoming ? "inline-block" : "hidden"
            }`}
          >
            ⭐ {anime?.score || "N/A"}
          </span>
          <span className="bg-blue-500 text-white px-2 py-0.5 rounded">
            {anime?.episodes || "?"} ep
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
