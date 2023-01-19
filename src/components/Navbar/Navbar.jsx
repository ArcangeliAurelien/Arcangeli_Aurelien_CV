import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
      <ul>
        <li className='active'>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/aPropos'>À propos</a>
        </li>
        <li>
          <a href="/competences">Compétences</a>
        </li>
        <li>
          <a href="/parcours">Parcours</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
