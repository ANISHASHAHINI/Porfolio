
import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Anisha shahini</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#protfolio">Protfolio</a></li>
      </ul>
      
      <div className="footer_socials">
        <a href="https://www.instagram.com/excujmee_grl/" target='_blank'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/anishashahini"target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/ANISHASHAHINI/"target='_blank'><BsGithub /></a>
      </div>
    </footer>
  )
}

export default Footer