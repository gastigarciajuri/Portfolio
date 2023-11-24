import React from 'react';
import Box from './Box';
import image1 from '../images/paint.png';
import image2 from '../images/s2.png';
import { text } from '../assets/data';
import { FaGithub } from 'react-icons/fa';


const Services = () => {
  return (
    <div id='services'>
      <div className='s-heading'>
        <h1>Services</h1>
        <p>Here are some Services I provide</p>
      </div>
      <div className='b-container'>
        <Box 
        image={image1} 
        alte='image1' 
        text={text.countries} 
        button1='DEPLOY' 
        button2={<FaGithub />}
        deployLink=""
        repoLink="https://github.com/gastigarciajuri/PI-COUNTRIES"
         />
        <Box 
        image={image1} 
        alte='image1'
        text={text.serendipia} 
        button1='DEPLOY' 
        button2={<FaGithub />} 
        deployLink="https://front-serendipia.vercel.app/"
        repoLink="https://github.com/gastigarciajuri/pfbooks"
        />
      </div>
    </div>
  );
};

export default Services;
