import React from 'react'
import './header.css'
import CaTA from './CaTA'
import ME from '../../assets/me1.png'
import HesderSocials from './HesderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Anisha shahini</h2>
        <h5 className="text-light">Full stack developer</h5>
        <CaTA />
        <HesderSocials />
        <div className='me'>
          <img src= {ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header