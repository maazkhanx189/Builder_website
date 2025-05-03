import React,{useState} from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portpolio from './sections/Portpolio'
import Working from './sections/Working'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'



const App = () => {
 
  
  return (
   <>
   <Header/>
     <Hero/>
    <About/>
    <Services/>
    <Portpolio/> 
    <Working/>
    <Testimonials/>
     <Contact/>
    <Footer/> 
   

     {/* <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Portpolio />} />
          </Routes>
          <Working/>
          <Testimonials/>
          <Route path="/contact" element={<Contact />} />
          <Footer/>
        
       </Routes>
    </BrowserRouter>  */}
   </>
  )
}

export default App

