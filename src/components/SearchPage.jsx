// components/SearchPage.jsx
import { useParams } from "react-router-dom";
import AllAnimePage from "../Page/AllAnimePage"; // adjust path if needed

const SearchPage = () => {
  const { searchQuery } = useParams();

  const url=`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}&limit=20`
  const titel = `Search Results for: "${searchQuery}"`;

  return <AllAnimePage url={url} titel={titel} />;
};

export default SearchPage;
