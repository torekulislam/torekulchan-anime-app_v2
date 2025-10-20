import React, { useEffect, useState } from "react";
import Contanear from "../components/Contanar/Contanear";
import ListContaner from "../components/List/ListContaner";
import Slied from "../components/Slied/Slied";
import AllAnimePage from "./AllAnimePage";
import loding2 from "../assets/loding2.gif";
import { fatchAnime } from "../api/fetchAnimeList";
function Home() {
  const [mainData, setMainData] = useState({
    topanime: [],
    mostpopular: [],
    topairing: [],
    latestcompleted: [],
    newanime: [],
    upcominganime: [],
  });
  const data = [
    {
      url: "https://api.jikan.moe/v4/top/anime?limit=5",
      paths: "topanime",
      titel: "Top Anime",
    },
    {
      url: "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=5",
      paths: "mostpopular",
      titel: "Most Popular",
    },
    {
      url: "https://api.jikan.moe/v4/top/anime?filter=airing&limit=5",
      paths: "topairing",
      titel: "Top Airing",
    },
    {
      url: "https://api.jikan.moe/v4/anime?status=complete&type=tv&order_by=start_date&sort=desc&limit=5",
      paths: "latestcompleted",
      titel: "Latest Completed",
    },
    // {
    //   url: "https://api.jikan.moe/v4/seasons/now?limit=10",
    //   paths: "newanime",
    //   titel: "New Anime",
    // },
    // {
    //   url: "https://api.jikan.moe/v4/anime?genres=12&status=upcoming&order_by=start_date&sort=asc&limit=5",
    //   paths: "upcominganime",
    //   titel: "Upcoming Anime",
    // },
  ];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const second = setTimeout(() => {
      document.querySelector("#loading").classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 5000);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fatching = async () => {
      try {
        await fatchAnime({
          url: "https://api.jikan.moe/v4/seasons/now?limit=10",
          setMainData,
          paths: "newanime",
        });

        await delay(1000);

        for (const item of data) {
          if (item.url) {
            await fatchAnime({
              url: item.url,
              setMainData,
              paths: item.paths,
            });
          }
          await delay(1000);
        }
        await delay(1000);
        await fatchAnime({
          url: "https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&limit=10",
          setMainData,
          paths: "upcominganime",
        });
        await delay(1000);
        await fatchAnime({
          url: "https://api.jikan.moe/v4/anime?genres=12&status=upcoming&order_by=start_date&sort=asc&limit=5",
          setMainData,
          paths: "newhentai",
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    return () => {
      fatching();
      clearTimeout(second);
    };
  }, []);

  const {
    newanime,
    topanime,
    mostpopular,
    topairing,
    latestcompleted,
    upcominganime,
  } = mainData;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#141420] mt-16 text-white relative">
      <div
        id="loading"
        className=" fixed inset-0 w-full h-screen  grid place-content-center  bg-[#222222fa] z-50"
      >
        <img src={loding2} alt="Loading..." className=" w-52 object-cover" />
      </div>
      <div className="mb-12">
        <Slied data={newanime} />
      </div>

      <div className="grid justify-around mx-auto w-full items-baseline grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4">
        {data.map((item, index) => (
          <ListContaner
            key={index}
            data={item.paths ? mainData[item.paths] : []}
            paths={`/home/anime/${item.paths}`}
            titel={item.titel}
          />
        ))}
      </div>

      <AllAnimePage
        titel="New Anime"
        data={newanime}
        paths="/home/anime/newanime"
        isAllAnime={false}
      />
      <AllAnimePage
        titel="Upcoming Anime"
        data={upcominganime}
        paths="/home/anime/upcominganime"
        isAllAnime={false}
      />
    </div>
  );
}

export default Home;
