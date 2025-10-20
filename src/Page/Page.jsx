import React from "react";
import { Outlet } from "react-router-dom";
function Page() {
  return (
    <div className="sm:flex flex-col items-center justify-center min-h-screen bg-[#141420]  text-white">
      <Outlet />
    </div>
  );
}

export default Page;
