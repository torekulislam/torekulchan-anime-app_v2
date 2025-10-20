import React from "react";
import { useParams } from "react-router-dom";
import Animedetails from "../components/AnimeDetails/Animedetails";

function AnimePage() {
  const { id } = useParams();

  // 🛡️ Don't build or render if mal_id is missing
  if (!id) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center text-white">
        <p>Loading anime details...</p>
      </div>
    );
  }

  const url = `https://api.jikan.moe/v4/anime/${id}/full`;

  return (
    <div className="w-full min-h-screen bg-[#14142048] text-white">
      <Animedetails url={url} id={id} />
    </div>
  );
}

export default AnimePage;
