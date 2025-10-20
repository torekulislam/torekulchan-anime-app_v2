import React, { useState } from "react";
import Contanear from "./components/Contanar/Contanear";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 100;
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
