import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const Services = () => {
  return (
    <section id='services'>
      <h5>How can I help you as a </h5>
      <h2>developer ?</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>IT Infrastructure</h3>
          </div>
          <ul className="service__list">
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Routing and Switching.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Experience Using <a href="https://www.cisco.com">Cisco</a> Devices.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Linux Server Administration.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Windows Server Administration.</p>
            </li>
          </ul>
        </article>

        {/*FIN DEL ARTICULO*/}

        <article className="service">
          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>
          <ul className="service__list">
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Cloud Computing Solutions.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Relational Database Design.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Backend Development.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Frontend Development.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Mobile Development.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Desktop Development.</p>
            </li>
          </ul>
        </article>

        {/*FIN DEL ARTICULO*/}

        <article className="service">
          <div className="service__head">
            <h3>Software Architectures</h3>
          </div>
          <ul className="service__list">
            <li>
              <GoCheck className='service__list-icon'/>
              <p>MVC.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Microservices.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Layered.</p>
            </li>
            <li>
              <GoCheck className='service__list-icon'/>
              <p>Event-Driven.</p>
            </li>
          </ul>
        </article>

        {/*FIN DEL ARTICULO*/}

      </div>
    </section>
  )
}

export default Services