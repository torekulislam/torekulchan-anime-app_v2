import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAnimeDetails } from "../../api/fetchAnimeDetails";
import YouTubeTrailerCard from "./YouTubeTrailerCard";
import CharactersContaner from "./CharactersContaner";

const Animedetails = ({ url, id }) => {
  const [animeDetails, setAnimeDetails] = useState({});

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAnimeDetails({ url, setAnimeDetails, id, setCharacters });
  }, [url, id]);

  return (
    <>
      <div className="min-w-[100vw] font-[Roboto] text-white bg-[#141420]">
        <div className="relative w-full  min-h-screen overflow-hidden">
          <div className="h-[1000px] w-full absolute -top-[450px] -left-36 bg-sky-500 rotate-60 sm:rotate-68 md:hidden"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start  bg-[#010a13] shadow-2xl  gap-12">
            <img
              src={
                animeDetails?.images?.jpg?.image_url ||
                animeDetails?.images?.jpg?.large_image_url ||
                "https://i.pinimg.com/originals/1c/e6/cf/1ce6cff58c44871749a5c8e83e489a44.gif"
              }
              alt={animeDetails.title}
              className="w-[225px] h-[354px] object-cover z-20 mt-24 md:ml-14"
            />

            <div className="md:mt-28 w-[90%] md:w-auto  md:mr-[100px] ">
              <div className="w-full mb-12">
                <h1 className="text-3xl text-center md:text-start font-bold capitalize mb-4">
                  {animeDetails?.title_english || animeDetails?.title}
                </h1>

                <div className="text-gray-300 mb-2">
                  <strong>Japanese:</strong> {animeDetails?.title_japanese}
                </div>
                <div className="text-gray-300 mb-2">
                  <strong>Synopsis:</strong> {animeDetails?.synopsis}
                </div>

                <div className="text-gray-300 mb-2">
                  <strong>Status:</strong> {animeDetails?.status}
                </div>

                <div className="text-gray-300 mb-2">
                  <strong>Aired:</strong> {animeDetails?.aired?.string}
                </div>

                <div className="text-gray-300 mb-2">
                  <strong>Premiered:</strong> {animeDetails?.season}{" "}
                  {animeDetails?.year}
                </div>
                <div className="text-gray-300 mb-2">
                  <strong>Studios:</strong> {animeDetails?.studios?.[0]?.name}{" "}
                </div>

                <div className="text-gray-300 mb-2">
                  <strong>Duration:</strong>{" "}
                  {animeDetails?.duration || "unknown"}
                </div>

                <div className="text-gray-300 mb-2 ">
                  <strong>Average Rating:</strong>{" "}
                  {animeDetails?.score || "N/A"}{" "}
                </div>

                <div className="text-gray-300 mb-2  flex items-start gap-2">
                  <strong>Genres:</strong>
                  <div className=" flex gap-2 flex-wrap flex-row-reverse items-center justify-end text-sm font-light">
                    {animeDetails?.genres?.map((item, index) => (
                      <Link
                        to={`/home/anime?genres=${item?.name.toLowerCase()}-${
                          item?.mal_id
                        }&page=1`}
                        key={index}
                      >
                        <span
                          key={index}
                          className="py-1 px-2.5 inline-block border rounded-full text-white hover:text-cyan-500"
                        >
                          {item?.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            {animeDetails.embed_url !== null && (
              <div className="w-full ">
                <YouTubeTrailerCard
                  youtubeId={animeDetails?.trailer?.embed_url}
                />
              </div>
            )}

            {characters.length > 0 && (
              <CharactersContaner characters={characters} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Animedetails;
