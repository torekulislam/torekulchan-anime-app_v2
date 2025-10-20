import React from "react";
import { Link } from "react-router-dom";

function NumBtn({ isCrrount, num, onPageChange, basePath = "" }) {
  return (
    <Link to={`${basePath}page=${num}`}>
      <button
        key={num}
        className={`px-4 py-2 flex items-center justify-center rounded-full transition-colors duration-200 ${
          isCrrount === true
            ? "bg-cyan-400 text-black font-bold"
            : "bg-[#1f1f2f] text-gray-400 hover:text-white"
        }`}
      >
        {num}
      </button>
    </Link>
  );
}

export default NumBtn;
