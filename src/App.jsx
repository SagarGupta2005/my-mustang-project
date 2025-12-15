import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { DarkModeProvider } from './components/Dark/DarkModeContext'
import Gallerypage from './pages/Gallerypage'
import SearchBox from './components/layout/SearchBox'
import WhatsAppButton from './components/layout/WhatsAppButton'
import About from './pages/About'
import Footer from './components/layout/Footer'
import Servicepage from './pages/ServicePage'
import Womenlist from './components/service/Womenlist'
import Boylist from './components/service/Boylist'
import BookingPage from './pages/BookingPage'
import BlogPage from './pages/BlogPage'
import ShopPage from './pages/ShopPage'
import Contect from './pages/Contect'
import News1 from './components/blog/news/News1'
import BlogNews from './components/blog/news/BlogNews'
function App() {

  return (
    <>
     <DarkModeProvider>
     <Navbar/>
     
     {/* <WhatsAppButton/> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallerypage/>}/>
      <Route path='/search' element={<SearchBox />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Servicepage/>}/>
      <Route path='/booking' element={<BookingPage/>}/>
      <Route path='/women' element={<Womenlist/>}/>
      <Route path='/boy' element={<Boylist/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/contact' element={<Contect/>}/>
      <Route path="/news1" element={<BlogNews/>}/>
      <Route path="*" element={<Home/>}/>

     </Routes>
     <Footer/>
     </DarkModeProvider>
    </>
  )
}

export default App
