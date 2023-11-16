import React from 'react'
import './header.css'
import CaTA from './CaTA'
import ME from '../../assets/me1.png'
import HesderSocials from './HesderSocials'

const Header = () => {
  return (
      <header>
         <h1>welcome!</h1>
        <h5>"Embarking on my journey as a budding developer, I invite you to witness the evolution of my coding 
          odyssey. Eager to contribute, ready to learn, and passionate about creating meaningful digital experiences.
           Join me on this exciting expedition where curiosity meets code, and every challenge is an opportunity to 
           grow. Let's build a future together, one line of code at a time."</h5>
        <section id='home'>
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
      </section>
      </header>
  )
}

export default Header