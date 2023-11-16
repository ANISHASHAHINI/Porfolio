import React from 'react'
import './about.css'
import ME from '../../assets/ME3.png'
import {TbWorldWww} from 'react-icons/tb'
import {SiDatadotai} from 'react-icons/si'
import {HiOutlineFolderPlus} from 'react-icons/hi2'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to know about me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
            <div className="about__me-image">
              <img src= {ME}alt="About image" />
            </div>
        </div>
        <div className="about__content">
           <div className="about_cards">
              <article className='about_card'>
                <TbWorldWww className='about_icon'/>
                <h5>Full Stack web development</h5>
                <small>MERN STACK</small>
              </article>
              <article className='about_card'>
                <SiDatadotai className='about_icon'/>
                <h5>Mechine learning Development</h5>
              </article>
              <article className='about_card'>
                <HiOutlineFolderPlus className='about_icon'/>
                <h5>Projects</h5>
                <small>5+projects</small>
              </article>
            </div>
            <p>
            Looking to establish a career in the field of Information
            Technology, I wish to work in a growth-oriented company and
            contribute to the development of the organization while
            upgrading my skill set and knowledge.
            I possess proficiency in several programming languages, including Java, 
            Python, and JavaScript. These languages serve as the foundation for my 
            successful projects and enable me to tackle a diverse range of 
            challenges effectively. 
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about