import React from 'react'
import './education.css'
import {VscDebugBreakpointLog} from 'react-icons/vsc'
const Education = () => {
  return (
    <section id='Education'>
      <h5>Whar I Studied</h5>
      <h2>My Educations</h2>

      <div className=" container container_education">
        <article className='education'>
          <div className="education_head">
            <h3>B.E(CSE)</h3>
          </div>
          <ul className='education_details'>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>CGPA-8.3</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>2019-2023</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>Computer Science and Engineering</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>Anna University Regional Campus-Tirunelveli.</p>
            </li>
          </ul>
        </article>
        {/*END OF B.E */}
        <article className='education'>
          <div className="education_head">
            <h3>Higher Secondary Education(12th)</h3>
          </div>
          <ul className='education_details'>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>PERCENTAGE-84%</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>2018-2019</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>Bio-Maths</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>Goverment Higher Secondary School-Keezhkulam</p>
            </li>
          </ul>
        </article>
        {/*END OF 12th */}
        <article className='education'>
          <div className="education_head">
            <h3>Secondary Education(10th)</h3>
          </div>
          <ul className='education_details'>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>PERCENTAGE-96%</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>2016-1017</p>
            </li>
            <li>
              <VscDebugBreakpointLog className='education-icon'/>
              <p>Goverment Higher Secondary School-Keezhkulam</p>
            </li>
          </ul>
        </article>
        {/*END OF 10th*/}
      </div>
    </section>
  )
}

export default Education