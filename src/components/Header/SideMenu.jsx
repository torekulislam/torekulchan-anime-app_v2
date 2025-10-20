import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function SideMenu({ setShoManu, shoManu }) {
  useEffect(() => {
    if (shoManu) {
      document.body.style.overflow = "hidden"; // 🚫 Disable scroll
    } else {
      document.body.style.overflow = "auto"; // ✅ Enable scroll
    }

    return () => (document.body.style.overflow = "auto"); // Clean up
  }, [shoManu]);
  const navigate = useNavigate();
  const navItem = [
    {
      name: "Home",
      slug: "/home",
    },
    {
      name: "Movies",
      slug: "/home/anime/movies?page=1",
    },
    {
      name: " TV Series",
      slug: "/home/anime/tvseries?page=1",
    },
    {
      name: " Most Popular",
      slug: "/home/anime/mostpopular?page=1",
    },
    {
      name: "Top Airing",
      slug: "/home/anime/topairing?page=1",
    },
  ];

  return (
    <>
      <div onClick={() => setShoManu(false)} className="">
        <div
          className={`w-[100vw] h-[100vh]  fixed top-0 left-0 z-20 bg-[#04101a70] backdrop-blur-[8px] overflow-hidden`}
        ></div>
        <AnimatePresence mode="wait">
          {shoManu && (
            <motion.div
              key="side-menu"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 z-30  min-h-screen w-full max-w-[350px] bg-[#00b8db0e] backdrop-blur-sm py-10 text-md font-[Roboto] font-medium flex flex-col gap-10"
            >
              <div className="w-full h-fit ">
                <button
                  onClick={() => setShoManu(!shoManu)}
                  className="p-3 cursor-pointer"
                >
                  <i className="fa-solid fa-angle-left text-sm mx-2"></i> Close
                  Menu
                </button>
              </div>

              <div className="">
                {navItem.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item?.slug}
                    end={item?.slug === "/home"} // 👈 only match exactly for home
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-stone-300 text-[#12CBC4]"
                          : "text-gray-200"
                      }`
                    }
                    aria-label={item?.name}
                  >
                    <div
                      title={item?.name}
                      className="px-3 py-4 block w-full text-left border-b border-gray-700 hover:text-cyan-500 transition"
                    >
                      {item?.name}
                    </div>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SideMenu;
