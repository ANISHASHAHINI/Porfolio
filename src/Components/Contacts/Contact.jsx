import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hpwivja', 'template_guapm3t', form.current, 'f4vammciXFng6MA9c')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icons'/>
            <h4>Email</h4>
            <h5>anishashahini2002@gmail.com</h5>
            <a href= "mailto:anishashahini2002@gmail.com" target='_blank'rel="noopener noreferrer">Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineInstagram className='contact_option-icons'/>
            <h4>Instagram</h4>
            <h5>excujmee_grl</h5>
            <a href="https://www.instagram.com/excujmee_grl/" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/*END OF THE FORM  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder=' Your full Name' required />
          <input type="email" name='email' placeholder='Your Emaiil' required />
          <textarea name="messsage"  rows="10" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact