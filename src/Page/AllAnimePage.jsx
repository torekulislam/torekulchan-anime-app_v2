import React, { useEffect, useState } from "react";
import Contanear from "../components/Contanar/Contanear";
import { fetchAnimeList } from "../api/fetchAnimeList";
import loding from "../assets/loding.gif";
import loding2 from "../assets/loding2.gif";
import Pagination from "../components/Pagination/Pagination";
import { useLocation } from "react-router-dom";

function AllAnimePage({
  url = null,
  titel,
  data,
  paths,
  isAllAnime = true,
  Page = 1,
}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get("page")) || Page;
  const genres = searchParams.get("genres") || "";
  const genreId = genres?.split("-").pop();

  const [animeLists, setAnimeLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [basePath, setBasePath] = useState("");
  const [apiUrl, setApiUrl] = useState(`${url}&page=${page}`);

  useEffect(() => {
    if (url === null) {
      setCurrentPage(page);
      setApiUrl(
        `https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=start_date&sort=desc&page=${page}`
      );
      setBasePath(`/home/anime?genres=${genres}&`);
    } else {
      setApiUrl(`${url}&page=${page}`);
      setBasePath(`${location.pathname}?`);
    }
  }, [page, genreId, titel]);

  useEffect(() => {
    if (!isAllAnime && data && data.length > 0) {
      setAnimeLists(data);
      setLoading(false);
    } else if (isAllAnime && apiUrl) {
      setAnimeLists([]);
      fetchAnimeList({ apiUrl, setAnimeLists, setTotalPages, setLoading });
    }
  }, [apiUrl, titel, data]);
  // console.log("🔍 API URL:", apiUrl);

  return (
    <div className="w-[98%] min-h-[852px] px-6 py-5 border mb-3 bg-[#141420] border-gray-800 mt-20">
      {!loading ? (
        <>
          <Contanear
            data={animeLists}
            titel={`${
              !genres
                ? ""
                : genres?.split("-")[0].charAt(0).toUpperCase() +
                  genres?.split("-")[0].slice(1) +
                  " "
            } ${titel}`}
            isAllAnime={isAllAnime}
            paths={paths}
          />
          {animeLists.length === 0 && (
            <div className="flex justify-center items-center mb-12 w-[95vw]">
              <img src={loding} alt="No anime found" className="w-[15%]" />
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-[98vh] flex flex-col items-center justify-center">
          <img src={loding2} alt="Loading..." className="w-[15%]" />
        </div>
      )}

      {!!isAllAnime && (
        <Pagination
          currentPage={page}
          pag={Page === 0}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
          basePath={basePath}
        />
      )}
    </div>
  );
}

export default AllAnimePage;
