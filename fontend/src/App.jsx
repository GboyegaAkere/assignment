import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import FeaturedWork from './components/FeaturedWork'
import Toolbox from './components/ToolBox'
import Expertise from './components/Expertise'
import MotivationCertifications from './components/MotivationCertification'
import Testimonials from './TEstimonials'
import { Footer } from './Footer'

const App = () => {
  return (
     <div className="bg-black min-h-screen relative">
      <Navbar />
      <Hero/>
      <Experience/>
      <FeaturedWork/>
      <Toolbox/>
      <Expertise/>
      <MotivationCertifications/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
