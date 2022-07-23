import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ECU from '../../assets/ecu.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Owen Sandwhich</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="college">
          <img src={ECU} alt="University" />
        </div>
        
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header