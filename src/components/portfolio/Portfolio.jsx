import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proyecto1.jpg'
import IMG2 from '../../assets/proyecto2.jpg'
import IMG3 from '../../assets/proyecto3.jpg'
import IMG4 from '../../assets/proyecto4.jpg'
import IMG5 from '../../assets/proyecto5.jpg'
import IMG6 from '../../assets/proyecto6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Nombre del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Nombre del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Nombre del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Nombre del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Nombre del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Nombre del proyecto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
