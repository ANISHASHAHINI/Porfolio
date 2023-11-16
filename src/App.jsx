import React from 'react'
import Header from './Components/Header/Header'
import Nav from'./Components/Navigation/Navi'
import About from './Components/about/About'
import Education from './Components/Education/Education'
import Skills from './Components/Expereince/Expereince'
import Protfolio from './Components/Protfolio/Protfolio'
import Contacts from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav  />
        <About />
        <Education />
        <Skills />
        <Protfolio />
        <Contacts />
        <Footer />
    </>
  )
}

export default App