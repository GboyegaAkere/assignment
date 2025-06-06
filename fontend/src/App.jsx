import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Mywork from './pages/Mywork'


const App = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/projects/:id" element={<Work />} />
        <Route path='/mywork' element={<Mywork/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
