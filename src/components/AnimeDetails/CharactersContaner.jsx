import React, { useState } from "react";
import CharactersCird from "./CharactersCird";

function CharactersContaner({ characters }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="max-w-full mx-auto p-8 px-10  bg-[#00b7db05]">
        <div className=" flex justify-between items-center">
          <h2 className="text-cyan-400 text-md sm:text-2xl font-bold sm:mb-6">
            Anime Characters
          </h2>
          {characters.length > 3 && (
            <button
              className=" hover:text-cyan-500 duration-300 transition text-[12px] sm:text-[16px]"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? (
                <span>
                  View Less <i className="fa-solid fa-angle-down  ml-1.5"></i>{" "}
                </span>
              ) : (
                <span>
                  View More
                  <i className="fa-solid fa-angle-right  ml-1.5"></i>
                </span>
              )}
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {characters.map((char, index) =>
            !showMore ? (
              index < 4 && (
                <div key={index}>
                  <CharactersCird key={index} char={char} />
                </div>
              )
            ) : (
              <div key={index}>
                <CharactersCird key={index} char={char} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default CharactersContaner;
