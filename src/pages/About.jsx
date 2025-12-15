import React from 'react'
import { FiRss } from 'react-icons/fi'
import First from '../components/about/first'
import CurvedLoopedit from '../components/about/CurvedLoopedit'
import HeadingAbout from '../components/about/HeadingAbout'
import Sabout from '../components/about/Sabout'
import ContactMapForm from '../components/conteact/ContactMapForm'
import ContactInfo from '../components/conteact/ContactInfo'

const About = () => {
  return (
    <div>
      <HeadingAbout/>
        <First/>
        <CurvedLoopedit/>
        <ContactInfo/>
        <ContactMapForm/>

        
      
    </div>
  )
}

export default About
