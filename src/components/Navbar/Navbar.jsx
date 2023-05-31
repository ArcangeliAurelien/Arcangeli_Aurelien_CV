import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);

      if (window.innerWidth > 900) {
        setToggleMenu(false)
      }
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 900) && (
        <ul className="listNav">
          <li className="items">
            <a href='#home'>
             <FontAwesomeIcon icon={faHouseChimney} />
            </a>
          </li>
          <li className="items">
            <a href='#aPropos'>À propos</a>
          </li>
          <li className="items">
            <a href="#competences">Compétences</a>
          </li>
          <li className="items">
            <a href="#parcours">Parcours</a>
          </li>
          <li className="items">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="items">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      <FontAwesomeIcon icon={faBars} className='menu_hamburger' onClick={toggleNav} />
    </nav>
  )
}