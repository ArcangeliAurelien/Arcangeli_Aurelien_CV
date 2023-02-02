import React from 'react'
import './Competences.css'

export default function Competences() {
  return (
    <div className='competences' id='competences'>
      <div className='titre'>Compétences</div>
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
          </ul>
        </div>
      </div>
    </div>
  )
}
