import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div>
      <div className='contact'>
        <div className='zoneEmail'>
          <FontAwesomeIcon icon={faEnvelope} className='iconEmail' />
          <div className='email'>
            <b>EMAIL : </b>
            arkaurel5929@gmail.com
          </div>
        </div>
        <div className='zoneMobile'>
          <FontAwesomeIcon icon={faMobile} className='iconMobile' />
          <div className='mobile'>
            <b>TELEPHONE : </b>
            06.26.32.46.37
          </div>
        </div>
      </div>
      <div className='reseau' id='contact'>
        <div className='icon'>
          <a className='linkedIn' href='https://www.linkedin.com/in/aur%C3%A9lien-arcangeli-516bba182/' rel='noreferrer' target="_blank">
            <FontAwesomeIcon className="logo" icon={['fab', 'linkedin']} />
          </a>

          <a className='twitter' href='https://twitter.com/Orel_Ark' rel='noreferrer' target="_blank">
            <FontAwesomeIcon className="logo" icon={['fab', 'twitter']} />
          </a>

          <a className='github' href='https://github.com/ArcangeliAurelien' rel='noreferrer' target="_blank">
            <FontAwesomeIcon className="logo" icon={['fab', 'github']} />
          </a>
        </div>

        <div>Aurélien ARCANGELI © 2023</div>
        <div>Tous droits réservés</div>
      </div>
    </div>
  )
}
