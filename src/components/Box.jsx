import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Box = (props) => {
  return (
    <div className='s-box'>
      <div className='s-b-img'>
        <video src={props.video}></video>
      </div>
      <div className='s-b-text'>
        <p>{props.text}</p>
        <div className='b-container'>
          <a href={props.deployLink} className='cv-btn' target='_blank' rel='noopener noreferrer'>
            <FaGlobe />
            {props.button1}
          </a>
          <a href={props.repoLink} className='cv-btn' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Box;
