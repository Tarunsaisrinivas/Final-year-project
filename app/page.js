import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Note from './components/Note'
import Hod from './pages/Hod'
import AchievementSlide from './pages/AchievementSlide'

const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Note />
    <Hod />
    <AchievementSlide />
    </>
  )
}

export default page