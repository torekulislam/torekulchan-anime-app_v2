import React, { useState, useEffect } from "react";
import SliedCard from "./SliedCard";
function Slied({ data }) {
  const [animeLists, setAnimeLists] = useState([]);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setAnimeLists(data);
    }
  }, [data]);

  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 9 ? 0 : prev + 1)); // ✅ loop 0-4
    }, 5000);

    return () => clearInterval(interval); // ✅ cleanup to prevent memory leak
  }, []);

  useEffect(() => {
    if (animeLists.length > 0) {
      setInfo(animeLists[count]);
    }
  }, [count, animeLists]);

  return (
    <>
      <div className="bg-gray-800 w-full ">
        <SliedCard info={info} />
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {animeLists.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => setCount(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === count ? "bg-cyan-400 scale-125" : "bg-gray-500"
            }`}
          >
            {""}
          </button>
        ))}
      </div>
    </>
  );
}

export default Slied;
