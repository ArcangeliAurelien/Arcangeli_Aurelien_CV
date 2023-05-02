import React from 'react'
import './Competences.css'
import Fade from 'react-reveal/Fade'

export default function Competences() {

  return (
    <div className='competences' id='competences'>
      <div className='titre'>Compétences</div>
      <div>
        <Fade bottom>
          <div className="containerComp">
            <div className='sousTitre'>Front-end</div>
            <p>
              Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.
            </p>
            <div className='list'>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>JSON</li>
              </ul>
              <ul>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>

          <div className="containerComp">
            <div className='sousTitre'>Savoir-Être</div>
            <p>
              Ensemble de qualités professionnelles qui reflètent la manière dont vous vous comportez dans un environnement professionnel.
            </p>
            <div className='list'>
              <ul>
                <li>Capacité d'adaptation</li>
                <li>Travail d'équipe</li>
                <li>Autonomie</li>
              </ul>
              <ul>
                <li>Curiosité</li>
                <li>Attention du détail</li>
                <li>Disponibilité</li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
