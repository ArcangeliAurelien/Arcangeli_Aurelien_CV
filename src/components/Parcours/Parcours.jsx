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
            {formations.map((dataForm) => {
              return (
                <>
                  <ul>
                    <li key={dataForm.id}>
                      <h3>{dataForm.date}</h3>
                      <div>{dataForm.lieu}: <b>{dataForm.titre}</b></div>
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
            {experiencePro.map((dataExp) => {
              return (
                <>
                  <ul>
                    <li key={dataExp.id}>
                      <h3>{dataExp.titre}</h3>
                      <div><b>{dataExp.date}</b></div>
                      <div>{dataExp.lieu}</div>
                      {(dataExp.descriptif).map((descEle, index) => (
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
