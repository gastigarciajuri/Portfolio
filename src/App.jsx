import React from 'react'
import  Header  from './components/Header';
import Features from './components/Features';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
      <Header />
      <div className='f-heading'>
        <h1>TECH SKILLS</h1>
        <p>MIS TECNOLOGIAS MAS USADAS</p>
      </div>
        <Features />
        <Services />    
    </div>
  )
}

export default App
