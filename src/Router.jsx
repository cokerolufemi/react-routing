import React from 'react'
import{BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Navbar from "./Components/Navbar"
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import ServiceDetails from './Components/ServiceDetails';

function Router() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>} />
     <Route path="/services" element={<Services/>}/>
     <Route path="/serviceDetails" element={<ServiceDetails/>}/>
     
    </Routes>
    </BrowserRouter>

  )
}

export default Router