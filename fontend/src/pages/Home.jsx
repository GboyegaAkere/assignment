import React from 'react'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import FeaturedWork from '../components/FeaturedWork'
import Expertise from '../components/Expertise'
import MotivationCertifications from '../components/MotivationCertification'
import Testimonials from '../components/Testimonials'
import Boxtool from '../components/Boxtool'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Experience/>
      <FeaturedWork/>
      <Boxtool/>
      <Expertise/>
      <MotivationCertifications/>
      <Testimonials/>
    </div>
  )
}

export default Home
