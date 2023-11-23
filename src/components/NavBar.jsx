import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo1.png';
import SolKeyIcon from './SolKeyIcon';

const NavBar = () => {
  // Estado para realizar un seguimiento del enlace activo
  const [activeLink, setActiveLink] = useState('main');

  // Función para manejar el clic en un enlace
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <div>
      <nav>
        <Link to='main' className='logo' smooth={true} duration={2000}>
          <img src={logo} alt="logo" />
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor="menu-btn">
          <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li>
            <Link
              to='main'
              className={activeLink === 'main' ? 'active' : ''}
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('main')}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to='features'
              className={activeLink === 'features' ? 'active' : ''}
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('features')}
            >
              TECH SKILLS
            </Link>
          </li>
          <li>
            <Link
              to='services'
              className={activeLink === 'services' ? 'active' : ''}
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('services')}
            >
              PROYECTOS
            </Link>
          </li>
          <li>
            <Link to='#' className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>
              CONTACTO
            </Link>
          </li>
        </ul>
        <Link to='#' className='hey'>
          To App
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
