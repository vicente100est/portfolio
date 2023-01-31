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
        <li><a href="#">Home</a></li>
        <li><a href="http://blog.vicentc0de.com/">Blog</a></li>
        <li><a href="#about">Who is VicentC0de</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Companies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/vicente100est" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/vicentcode/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/vicentedoficial" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; <a href="http://vicentc0de.com/">Vicente Estrada</a>   ||   2023</small>
      </div>
    </footer>
  )
}

export default Footer