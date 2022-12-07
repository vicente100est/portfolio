import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsAwardFill} from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {MdFolderSpecial} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <h5>Who is</h5>
            <h2>VicentC0de</h2>

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
                            <h5>Job Experience</h5>
                            <small>Work in Tech since 2018</small>
                        </article>

                        <article className='about__card'>
                            <FaLaptopCode className='about__icon' />
                            <h5>.NET</h5>
                            <small>is my favorite technology</small>
                        </article>

                        <article className='about__card'>
                            <MdFolderSpecial className='about__icon' />
                            <h5>Lover</h5>
                            <small>of the open-source communities</small>
                        </article>
                    </div>

                    <p>Vicente Estrada is a software engineer, graduated from the Universidad Tecnológica
                        de Nezahualcóyotl (UTN) with extensive knowledge in Cloud Computing, IT Solution
                        Design and Backend Development. I enjoy my job, I think Software is the best tool
                        to solve all human problems.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default About