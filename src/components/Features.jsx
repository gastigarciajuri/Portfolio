import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faBootstrap, faCss3, faHtml5, faGit } from '@fortawesome/free-brands-svg-icons';

function Features() {
  return (
    <div id='features'>
      <div className='features-model'>
        <div className='features-icons'>
          <FontAwesomeIcon icon={faReact} size='4x' />
          <FontAwesomeIcon icon={faNode} size='4x' />
          <FontAwesomeIcon icon={faBootstrap} size='4x' />
          <FontAwesomeIcon icon={faCss3} size='4x' />
          <FontAwesomeIcon icon={faHtml5} size='4x' />
          <FontAwesomeIcon icon={faGit} size='4x' />
          {/* Add more icons as needed */}
        </div>
      </div>
      <div className='features-text'>
        <h2>TECH SKILLS</h2>
        <h3>This Application <span>Software</span> is art</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          distinctio modi incidunt veniam nemo hic eligendi? Eos, quas! Cumque
          sit aspernatur nostrum voluptates dolorem voluptas et minima quos,
          dolores est quod, nulla cum aut voluptate temporibus? Cumque facere
          delectus in.
        </p>
        <button>View more Features</button>
      </div>
    </div>
  );
}

export default Features;
