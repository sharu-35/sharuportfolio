import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutme from "./Component/About/Aboutme"
import Contact from "./Component/Contact/Contact"
import Hero from "./Component/Hero/Hero"

import Skills from "./Component/Skills/Skills"
import './index.css'

import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';
function App() {
 

  return (
    <>
      <Router>
      <div>
     <Navbar/>
      <div className="container"/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/Aboutme" element={<Aboutme/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
