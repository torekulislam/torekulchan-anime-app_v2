import React from "react";

function ListCird({ anime }) {
  return (
    <>
      <div className="flex items-center gap-3 p-3 shadow-lg  w-full border-b border-gray-600">
        <div className="w-[60px] h-[90px] overflow-hidden rounded-lg">
          <img
            className=" h-full"
            src={anime.images.jpg.image_url}
            alt={anime.title}
          />
        </div>
        <div className="text-white h-full grid gap-3 items-baseline w-[70%]">
          <h1 className=" text-md line-clamp-2 leading-snug font-semibold hover:text-cyan-500">
            {anime.title}
          </h1>
          <p className="text-gray-400 text-sm">
            {" "}
            <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-l-sm">
              {anime.episodes || "N/A"} ep
            </span>{" "}
            <span className="bg-sky-500 text-white px-2 py-0.5 rounded-r-sm">
              ⭐{anime.score || "N/A"}
            </span>{" "}
            • <span className="text-sm text-white"> {anime.type} </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ListCird;
