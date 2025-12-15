import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Trust from '../components/home/Tust'
import Booking from '../components/home/Booking'
import HomeGallery from '../components/home/HomeGallery'
import CurvedLoopedit from '../components/about/CurvedLoopedit'
import Timinginfo from '../components/home/Timinginfo'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import InfoSection from '../components/home/InfoSection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Service/>
        <Trust/>
        <InfoSection/>
        <HomeGallery/>
        <CurvedLoopedit/>
        <Booking/>
        <Timinginfo/>
        <WhatsAppButton/>
      
    </div>
  )
}

export default Home
