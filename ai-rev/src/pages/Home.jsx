import React from 'react'
import NavBar from '../components/NavBar'
import HeroSction from '../components/HeroSction'
import AiTypes from '../components/aiTypes'
import AiBenefits from '../components/AiBenefits'
import Contact from '../components/contact'
import Footer from '../components/Footer'

export default function () {
  return (
    <>
    <NavBar/>
    <main>
        <HeroSction/>
        <AiTypes/>
        <AiBenefits/>
        <Contact/>
    </main>
    <Footer/>
    
    </>
  )
}
