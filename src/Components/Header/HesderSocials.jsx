import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HesderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anishashahini/" target='_blank'  rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ANISHASHAHINI/" target='_blank'  rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/excujmee_grl/" target='_blank'  rel="noopener noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HesderSocials