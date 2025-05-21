import React from 'react'
import Home from './components/Home'
import About from './components/About'
import ProgrammingLanguages from './components/ProgrammingLanguages'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
       <Navbar/>
      <Home/>
      <About/>
      <ProgrammingLanguages/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App