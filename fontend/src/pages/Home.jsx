import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import FeaturedWork from '../components/FeaturedWork'
import Toolbox from '../components/ToolBox'
import Expertise from '../components/Expertise'
import MotivationCertifications from '../components/MotivationCertification'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Experience/>
      <FeaturedWork/>
      <Toolbox/>
      <Expertise/>
      <MotivationCertifications/>
      <Testimonials/>
    </div>
  )
}

export default Home
