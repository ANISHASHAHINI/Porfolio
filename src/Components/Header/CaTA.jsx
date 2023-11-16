import React from 'react'
import CV from './../../assets/Anisha shahini resum.pdf'

const CaTA = () => {
  return (
    <div className="cta">
        <a href= {CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CaTA