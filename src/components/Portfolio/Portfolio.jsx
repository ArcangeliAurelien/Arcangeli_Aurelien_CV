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
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
      >
        {projets.map((slide) => {
          return (
            <div key={slide.id}>
              <img src={require('../../assets/' + slide.image)} alt={slide.titre} />
              <div className="overlay">
                <h2 className="overlay_titre">{slide.titre}</h2>
                <p className="overlay_description">{slide.description}</p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
