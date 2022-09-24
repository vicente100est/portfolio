import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/yo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Vicente Estrada</h1>
        <h5 className="text-light">Software Develope</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Vicente" />
        </div>

        <a href="#container" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
