import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
   <footer className="footer">
    <div className="footerLinks">
    <a
          href="https://github.com/samanthaahn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/samantha-ahn-a07b44264/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/sam_ahn/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faInstagram} />
        </a>



    </div>
   </footer>
  )
}

export default Footer