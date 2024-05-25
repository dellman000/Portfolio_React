import { useState } from 'react'
import { Homepage } from '../pages/HomePage'
import Protfolio from '../pages/Portfolio'
import { Contact } from '../pages/ContactMe'
import { Routes, Route,NavLink } from 'react-router-dom'

import AboutMe from '../pages/AboutMe'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  

  return (
    <>
      {/* <Homepage/> */}

      <Routes>
        <Route path='/' element = {<Homepage/>} />
        <Route path='/aboutMe' element = {<AboutMe/>} />
        <Route path='/Portfolio' element = {<Protfolio/>} />
        <Route path='/ContactMe' element = {<Contact/>} />
      </Routes>
    
    </>
  )
}

export default App
