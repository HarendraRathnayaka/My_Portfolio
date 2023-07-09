import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Harendra Rathnayaka</h1>
        <h5 className="text-light">Fullstack Developer / UI UX Designer</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
