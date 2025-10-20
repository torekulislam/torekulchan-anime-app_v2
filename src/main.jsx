import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import WelcomPage from "./components/WelcomPage/WelcomPage.jsx";
import Page from "./Page/Page.jsx";
import Home from "./Page/Home.jsx";
import AllAnimePage from "./Page/AllAnimePage.jsx";
import SearchPage from "./components/SearchPage.jsx";
import AnimePage from "./Page/AmimePage.jsx"; // Import the AnimePage component
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Page />,
//     children: [
//       { index: true, element: <WelcomPage /> }, // Renders at "/"
//       {
//         path: "home",
//         element: <App />,
//         children: [
//           { index: true, element: <Home /> },
//           {
//             path: "search/:searchQuery",
//             element: <SearchPage />,
//           },
//           {
//             path: "anime/:mal_id", // ✅ no leading slash!
//             element: <AnimePage />, // This is the component that will render the anime details
//           }, // Renders at "/home"
//           {
//             path: "/home/anime/genres/:name/:mal_id/page/:num", // ✅ no leading slash!
//             element: <AllAnimePage titel={"Anime"} />, // This is the component that will render the anime details
//           }, // Renders at "/home"

//           {
//             path: "/home/anime/newanime/page/:num", // ✅ no leading slash!
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/seasons/now?limit=20"
//                 titel="New Anime"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/hentai/page/:num", // ✅ no leading slash!
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/anime?genres=12&sort=desc&order_by=start_date"
//                 titel="New Hentai"
//               />
//             ),
//           },

//           {
//             path: "/home/anime/upcominganime/page/:num", // ✅ no leading slash!
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&limit=20"
//                 titel="Upcoming Anime"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/topanime/page/:num", // ✅ no leading slash!
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/top/anime?limit=20"
//                 titel="Top Anime"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/topairing/page/:num", // ✅ no leading slash!
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/top/anime?filter=airing&limit=20"
//                 titel="Top Airing Anime"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/mostpopular/page/:num",
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=20"
//                 titel="Most Popular Anime"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/movies/page/:num",
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/anime?type=movie&order_by=start_date&sort=desc&limit=20"
//                 titel="Movies"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/tvseries/page/:num",
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/anime?type=tv&order_by=start_date&sort=desc&limit=20"
//                 titel="TV Series"
//               />
//             ),
//           },
//           {
//             path: "/home/anime/latestcompleted/page/:num",
//             element: (
//               <AllAnimePage
//                 url="https://api.jikan.moe/v4/anime?status=complete&type=tv&order_by=start_date&sort=desc&limit=20"
//                 titel="Latest Completed"
//               />
//             ),
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { index: true, element: <WelcomPage /> },
      {
        path: "home",
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "search/:searchQuery",
            element: <SearchPage />,
          },
          {
            path: "anime/:id",
            element: <AnimePage />,
          },
          {
            path: "anime",
            element: <AllAnimePage titel={"Anime"} />,
          },

          {
            path: "anime/newanime",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/seasons/now?limit=20"
                titel="New Anime"
              />
            ),
          },
          {
            path: "anime/hentai",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/anime?genres=12&sort=desc&order_by=start_date"
                titel="New Hentai"
              />
            ),
          },
          {
            path: "anime/upcominganime",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&limit=20"
                titel="Upcoming Anime"
              />
            ),
          },
          {
            path: "anime/topanime",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/top/anime?limit=20"
                titel="Top Anime"
              />
            ),
          },
          {
            path: "anime/topairing",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/top/anime?filter=airing&limit=20"
                titel="Top Airing Anime"
              />
            ),
          },
          {
            path: "anime/mostpopular",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=20"
                titel="Most Popular Anime"
              />
            ),
          },
          {
            path: "anime/movies",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/anime?type=movie&order_by=start_date&sort=desc&limit=20"
                titel="Movies"
              />
            ),
          },
          {
            path: "anime/tvseries",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/anime?type=tv&order_by=start_date&sort=desc&limit=20"
                titel="TV Series"
              />
            ),
          },
          {
            path: "anime/latestcompleted",
            element: (
              <AllAnimePage
                url="https://api.jikan.moe/v4/anime?status=complete&type=tv&order_by=start_date&sort=desc&limit=20"
                titel="Latest Completed"
              />
            ),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
