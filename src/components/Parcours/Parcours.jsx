import React from 'react'
import './Parcours.css'
import { formations, experiencePro } from '../../data/Parcours.js'

export default function Parcours() {
  return (
    <div className='parcours' id='parcours'>
      <div className='titre'>Parcours</div>
      <div className='containerParcours'>
        <div className=' box box1'>
          <h2>Formations</h2><br />
          <div>
            {formations.map((data) => {
              return (
                <>
                  <ul>
                    <li key={data.id}>
                      <h3>{data.date}</h3>
                      <div>{data.lieu}: <b>{data.titre}</b></div>
                    </li><br />
                  </ul>
                </>
              )
            })}
          </div>
        </div>

        <div className='box box2'>
          <h2>Expériences Professionelle</h2>
          <div>
            {experiencePro.map((data) => {
              return (
                <>
                  <ul>
                    <li key={data.id}>
                      <h3>{data.titre}</h3>
                      <div><b>{data.date}</b></div>
                      <div>{data.lieu}</div>
                      {(data.descriptif).map((descEle, index) => (
                        <>
                          <ul>
                            <li key={index}>{descEle}</li>
                          </ul>
                        </>  
                      ))}
                    </li><br />
                  </ul>
                </>
              )
            })}
          </div>
        </div>
      </div>
      
    </div>
  )
}
