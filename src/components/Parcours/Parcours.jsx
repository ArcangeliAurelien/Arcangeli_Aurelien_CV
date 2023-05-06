import React from 'react'
import './Parcours.css'
import Formations from '../../data/Parcours.json'

export default function Parcours() {
  const element = Formations.formations.map((ele) => ele.titre)
  console.log(element);

  return (
    <div className='parcours' id='parcours'>
      <div className='titre'>Parcours</div>
      <div className='containerParcours'>
        <div className=' box box1'>
          <h2>Formations</h2>
          {
            <div>
              {element}
            </div>
          }
        </div>

        <div className='box box2'>
          <h2>Expériences Professionelle</h2>
        </div>
      </div>
      
    </div>
  )
}
