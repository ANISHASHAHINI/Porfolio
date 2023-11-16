import React from 'react'
import './navi.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {IoIosSchool} from 'react-icons/io'
import {AiOutlineProfile} from 'react-icons/ai'
import {MdOutlineContactMail} from 'react-icons/md'
import { useState } from 'react'
const Navi = () => {
  const [activeNav,setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className= {activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#education" onClick={() => setActiveNav('education')} className= {activeNav === '#education' ? 'active' : ''}><IoIosSchool/></a>
      <a href="#protfolio" onClick={() => setActiveNav('#protfolio')} className= {activeNav === '#protfolio' ? 'active' : ''}><AiOutlineProfile /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail /></a>
    </nav>
  )
}

export default Navi