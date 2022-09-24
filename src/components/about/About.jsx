import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsAwardFill} from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {MdFolderSpecial} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <h5>Conoce un poco</h5>
            <h2>Sobre mi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Imagen Sobre mi" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BsAwardFill className='about__icon' />
                            <h5>Experiencia</h5>
                            <small>+2 años de experiencia</small>
                        </article>

                        <article className='about__card'>
                            <FaLaptopCode className='about__icon' />
                            <h5>Herramientas</h5>
                            <small>+20 lenguajes y herramientas</small>
                        </article>

                        <article className='about__card'>
                            <MdFolderSpecial className='about__icon' />
                            <h5>Proyectos</h5>
                            <small>+50 proyectos completados</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque natus deserunt vitae quis recusandae eaque ex doloribus voluptatibus harum saepe? In praesentium culpa cumque dolore excepturi ad atque perspiciatis at!</p>

                    <a href="#contact" className='btn btn-primary'>Contactame</a>
                </div>
            </div>
        </section>
    )
}

export default About