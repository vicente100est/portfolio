import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vicente Estrada</a>

      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contactame</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/vicente100est" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/vicentcode/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/vicentedoficial" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <a href="https://www.linkedin.com/in/pamela-garcia-ortiz/">Pamela Garcia</a>   ||   2022</small>
      </div>
    </footer>
  )
}

export default Footer