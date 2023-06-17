import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'



export default function App() {
  return (
    <>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
    </>
    
  )
}
