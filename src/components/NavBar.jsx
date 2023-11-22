import React from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo1.png'


const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to='main' className='logo' smooth={true} duration={2000} >
          <img src={logo} alt="logo" />
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor="menu-btn">
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='main' className='active' smooth={true} duration={1000} >ABOUT</Link></li>
          <li><Link to='features' smooth={true} duration={1000}>TECH SKILLS</Link></li>
          <li><Link to='services' smooth={true} duration={1000}>PROYECTOS</Link></li>
          <li><Link to='#'>CONTACTO</Link></li>
        </ul>
        <Link to='#' className='hey'>To App</Link>
      </nav>
    </div>
  )
}

export default NavBar;
