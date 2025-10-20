import React, { useState } from 'react'
import Contanear from './components/Contanar/Contanear'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 100;
  return (
    <>
      
      <Header />

    
      
      <main>
        <Outlet />
      </main>
      
      {/* <div className='flex flex-col items-center justify-center min-h-screen bg-[#141420] mt-20 text-white'>
      <Contanear url='https://api.jikan.moe/v4/seasons/now?limit=10' titel='New Anime' />
      <Contanear url='https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&limit=10' titel='Upcoming Anime' />
      <Contanear url='https://api.jikan.moe/v4/top/anime?limit=10' titel='Top Anime' />
     
      </div> */}
      <Footer />


    </>
  )
}

export default App
