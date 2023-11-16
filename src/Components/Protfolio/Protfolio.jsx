import React from 'react'
import './protfolio.css'
import IMG1 from './../../assets/rabit_game.png'
import IMG2 from '../../assets/MYNote app.png'
import IMG3 from '../../assets/weatherapp.png'
import IMG4 from '../../assets/react chat app pic.png'
import IMG5 from '../../assets/bookstoreapp.png'

const data = [
  // {
  //   id :1,
  //   image: IMG1,
  //   title:"Handwritten Digit Recognition system-Deep Learning",
  //   github: 'https://github.com/IBM-EPBL/IBM-Project-23458-1659883628'
  // },
  {
    id :2,
    image: IMG1,
    title:"VEZHAN VIRAL -Mobile Application",
    github: 'https://github.com/ANISHASHAHINI/VEZHAN-VIRAL-Mobile-application'
  },
  {
    id :3,
    image: IMG2,
    title:"My Note App",
    github: 'https://github.com/ANISHASHAHINI/My_Notes_App',
    demo: 'https://anishashahini.github.io/My_Notes_App/'
  },
  {
    id :4,
    image: IMG3,
    title:'React Weather App',
    github: 'https://github.com/ANISHASHAHINI/React_Weather_App/tree/master',
    demo:'https://anishas-weather-app.netlify.app/'
  },
  {
    id :5,
    image: IMG4,
    title:"React Chat Application",
    github: 'https://github.com/ANISHASHAHINI/React_Chat_Application',
    demo:'https://anishaschatapp.netlify.app/'
  },{
    id :6,
    image: IMG5,
    title:"React Book store application",
    github: 'https://github.com/ANISHASHAHINI/Book_Store_application',
    demo:'https://biginner-book-store-app.netlify.app/'
  }
]
const Protfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container protfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='protfolio_item'>
                  <div className="protfolio_img-image">
                    <img src= {image} alt= {title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="protfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub code</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>live demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Protfolio