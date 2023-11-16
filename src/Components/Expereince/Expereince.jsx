import React from 'react'
import './expereince.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Expereince = () => {
  return (
    <section id='skills'>
      <h5>What Skills i have</h5>
      <h2>My Skills</h2>
    

    <div className="container experience_container">
    <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>HTML</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>CSS</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>JavaScript</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Reactjs</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>JAVA</h4>
          </article>
        </div>
    </div>
    {/*END OF FRENTEND */}
    <div className="experience_backend">
      <h3>Backend Development</h3>
      <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Node JS</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>MangoDB</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>MySQL</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Git</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Python</h4>
          </article>
        </div>   
      </div>
      <div className="experience_backend">
      <h3>Meachine Learning</h3>
      <div className="experience_content">
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Python</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Python libraries</h4>
            <small>(Pandas,NumPy,
              Seaborn,TensorFlow,
              Keras,PyTorch,..)</small>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Jupitar Notebook</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Flask</h4>
          </article>
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <h4>Streamlit</h4>
          </article>
        </div>   
      </div>
    </div>
    </section>
  )
}

export default Expereince