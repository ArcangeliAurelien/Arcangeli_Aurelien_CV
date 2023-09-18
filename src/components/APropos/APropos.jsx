import React from 'react'
import './APropos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import photoProfil from '../../assets/Photo_profil.jpg';
import cvAurelienArcangeli from '../../assets/CV_Aurelien_Arcangeli_Developpeur_Front-End.pdf'

export default function APropos() {

  // Calcul âge
  const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className='aPropos' id='aPropos'>
      <div className='titre'>À propos de moi :</div>
      <div className="containerAPP">
        <div className='descId'>
          <img className='photo' src={photoProfil} alt='profil' />
          <ul>
            <li><b>Nom : </b>ARCANGELI Aurélien</li>
            <li><b>Age : </b>{getAge("1988/05/29")} ans</li>
            <li><b>Ville actuelle : </b>Cuincy (59)</li>
            <li><b>Hobbies : </b>jeux vidéos, cinéma, maquettes</li>
            <li><b>Langues : </b>Français, Anglais</li>
            <li><b>Permis B</b></li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> : arkaurel5929@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMobile} /> : 06.26.32.46.37
            </li>
            <li>
              <a href={cvAurelienArcangeli}><button className='buttonCV'>TÉLÉCHARGER MON CV</button></a>
            </li>
          </ul>
        </div>

        <div className='desc'>
          <p>
            Je suis développeur débutant, j'ai passé une année à apprendre les bases du développement web aussi bien le Front-End que le Back-End. Etant plus à l'aise dans la partie Front-End du domaine, je me suis spécialisé dans celui-ci, plus particulièrement grâce au framework React qui m'a permit de mieux cibler ce que je souhaite et ainsi affiner mes compétences.
          </p>
          <p>
            Durant les 14 mois de formation à React, j'ai pu développer mes compétences acquise lors de ma première formation et également apprendre à travailler en autodidacte où j'ai du trouver les solutions aux problèmes qui m'étaient imposé. Ce développement de moi me permet aujourd'hui d'aborder mon travail et mes réalisations avec plus de sérénité.
          </p>
          <p>
            J'ai commencé dans la vie active en tant que préparateur de commande, cela m'a permit d'apprendre à travailler en équipe mais je peux également fournir un travail plus personnel. je suis capable de m'adapter à toutes situations afin de mieux répondre aux attentes des clients.
          </p>
        </div>
      </div>
    </div>
  )
}
