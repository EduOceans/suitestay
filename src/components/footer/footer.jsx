import React from 'react'

import { faInstagram, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

import "./footer.css"

function footer() {
  return (
    <div className='surface-0 border-top-2 footer'>
      <div className='footer-icons'>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} className='footer-icons-color'/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} className='footer-icons-color'/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} className='footer-icons-color'/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} className='footer-icons-color'/>
        </a>
      </div>
      <div className="footerNav">
        <ul>
          <li><Link to="/" className='footer-links'>Home</Link></li>
          <li><Link to="/contact" className='footer-links'>Contact</Link></li>
          <li><Link to="" className='footer-links'>Reservations</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default footer