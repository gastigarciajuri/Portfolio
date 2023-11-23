import React from 'react'
import NavBar from './NavBar.jsx'
import { FaGithub, FaLinkedin, FaFile } from 'react-icons/fa'

const Header = () => {
  return (
    <div id='main'>
        <NavBar />
        <div className='name'>
            <h1>Portfolio <span>Gaston Garcia Juri</span></h1>
            <p className='details'>Desarrollador fullstack, con pasion por el desarrollo 
            Front End. Experiencia en proyectos academicos, personales y en grupo. Metodologias agiles   <span>scrum</span>
            </p>

            <div className='header-btns'>
            <a href="#" className='cv-btn'>
              <FaFile size={24} /> {/* Tamaño personalizable */}
              C.V
            </a>
            <a href="#" className='cv-btn'>
              <FaGithub size={24} /> {/* Tamaño personalizable */}
            </a>
            <a href="#" className='cv-btn'>
              <FaLinkedin size={24} /> {/* Tamaño personalizable */}
            </a>
            </div>
        </div>
        <div className='arrow'></div>
    </div>
  )
}
export default Header;
