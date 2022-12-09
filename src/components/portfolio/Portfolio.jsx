import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proyecto1.PNG'
import IMG2 from '../../assets/proyecto2.PNG'
import IMG3 from '../../assets/proyecto3.PNG'
import IMG4 from '../../assets/proyecto4.PNG'
import IMG5 from '../../assets/proyecto5.PNG'
import IMG6 from '../../assets/proyecto6.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>These are some projects that I have done or collaborated on</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>vic3ntpedia</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/vicente100est/VicentPedia" className='btn'>Github</a>
            <a href="https://vic3ntpedia.netlify.app" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Renta o Venta</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/#" className='btn'>Github</a>
            <a href="https://www.rentaoventa.com/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Workbeat</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/#" className='btn'>Github</a>
            <a href="https://workbeat.com/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Oficina Virtual</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/#" className='btn'>Github</a>
            <a href="https://www.tecnicaencolectores.com.mx/tecsa/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Organic Nails Queretaro | E-Commerce</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/#" className='btn'>Github</a>
            <a href="https://organicnailsqueretaro.com/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>In my github you can find more than 100 finished projects. FOLLOW ME!</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/vicente100est" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
