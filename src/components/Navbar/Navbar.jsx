import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <a href='#home' className='active'>
            <FontAwesomeIcon icon={faHouseChimney} />
          </a>
        </li>
        <li>
          <a href='#aPropos'>À propos</a>
        </li>
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#parcours">Parcours</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
