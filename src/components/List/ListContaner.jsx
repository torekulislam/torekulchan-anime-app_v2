import { useState, useEffect } from "react";
import ListCird from "./ListCird";
import { Link } from "react-router-dom";

function ListContaner({ data, titel, paths }) {
  const [animeLists, setAnimeLists] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setAnimeLists(data);
    }
  }, [data]);

  return (
    <>
      <div className="bg-[#00b7db04] w-full px-4 py-3 border border-gray-800 mb-3">
        <h1 className="text-cyan-400 text-2xl font-bold mb-6">{titel}</h1>
        <div className="grid mx-auto gap-1">
          {animeLists.map((anime, index) => (
            <Link
              to={`/home/anime/${anime.mal_id}`}
              key={index}
              className="no-underline text-black"
            >
              <ListCird anime={anime} />
            </Link>
          ))}
          <Link to={`${paths}?page=1`}>
            <span className="cursor-pointer hover:text-cyan-500 transition-all duration-300 p=my-4 w-fit px-2">
              View more{" "}
              <i className="fa-solid fa-angle-right text-[10px] ml-1.5"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ListContaner;
