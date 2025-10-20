import React, { useEffect, useState } from "react";

import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";

function Contanear({ paths, titel, data, isAllAnime = false }) {
  const [animeLists, setAnimeLists] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      setAnimeLists(data);
    }
  }, [data]);

  return (
    <div className="w-full ">
      <div className="flex items-center max-w-7xl mx-auto justify-between mb-6">
        <h1 className="text-cyan-400 text-2xl font-bold mb-6">{titel}</h1>
        {!isAllAnime && (
          <div className="text-[15px] text-gray-400">
            <Link to={`${paths}?page=1`}>
              <span className="cursor-pointer hover:text-cyan-500 transition-all duration-300">
                View more{" "}
                <i className="fa-solid fa-angle-right text-[10px] ml-1.5"></i>
              </span>
            </Link>
          </div>
        )}
      </div>

      <div className="grid justify-around mx-auto w-fit items-baseline grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
        {animeLists.map((anime, index) => (
          <Link
            to={`/home/anime/${anime.mal_id}`}
            className="no-underline text-black"
            key={index}
          >
            <AnimeCard anime={anime} isUpcoming={titel === "Upcoming Anime"} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Contanear;
