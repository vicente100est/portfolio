import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qué ofresco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseño UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/*FIN DEL ARTICULO*/}

        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/*FIN DEL ARTICULO*/}

        <article className="service">
          <div className="service__head">
            <h3>Community Manager</h3>
          </div>
          <ul className="service__list">
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/*FIN DEL ARTICULO*/}

      </div>
    </section>
  )
}

export default Services