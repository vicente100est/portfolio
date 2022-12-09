import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Let's chat</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vicenteestradomin@gmail.com</h5>
            <a href="mailto:vicenteestradomin@gmail.com">Email</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vicente Estrada</h5>
            <a href="https://www.linkedin.com/in/vicente-estrada-0678b8190/" target="__blank">Message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+52 55 1155 2263</h5>
            <a href="https://wa.me/525511552263" target="__blank">Whatsapp Message</a>
          </article>
        </div>
        {/* FIN DE LAS OPCIONES DE CONTACTO */}

        <form action="">
          <input type="text" name='name' placeholder='Tu nombre completo' required/>
          <input type="email" name="email" placeholder='Tu Email' required/>
          <textarea name="message" rows="10" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact