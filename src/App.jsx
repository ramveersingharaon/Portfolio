import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Banner from './components/Banner'
import Projects from './components/Project/Projects'

import Review from './components/Review/Review'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'
// import About from './components/About/About'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Banner/>
        <Projects/>
        <Review/>
        <Contact/>
        <Footer/>
        {/* <About/> */}
      </BrowserRouter></>

  )
}

export default App