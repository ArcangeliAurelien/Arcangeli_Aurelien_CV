import React from 'react'
import './Portfolio.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { projets } from '../../data/Projets';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='titre'>Portfolio</div>
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {projets.map((slide) => {
          return (
            <div key={slide.id}>
              <img src={require('../../assets/' + slide.image)} alt={slide.titre} />
              <div className="overlay">
                <div className="containerOverlay">
                  <h2 className="overlay_titre">{slide.titre}</h2>
                  <ul className='tags'>
                    <>{(slide.tags).map((tag) => {
                      return (

                        <li key={tag} className='tag'>{tag}</li>

                      )
                    })}</>
                  </ul>
                  <p className="overlay_description">{slide.description}</p>
                  <div className='buttons'>
                    <a href={slide.GitHub} target="_blank" rel="noreferrer"><button className="button">Voir Github</button></a>
                    <a href={slide.source} target="_blank" rel="noreferrer"><button className="button">Voir Site</button></a>
                  </div>

                </div>
                </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
