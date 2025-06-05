import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'


const App = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path="/projects/:id" element={<Work />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
