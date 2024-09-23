import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Note from './components/Note'
import Hod from './pages/Hod'

const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Note />
    <Hod />
    </>
  )
}

export default page