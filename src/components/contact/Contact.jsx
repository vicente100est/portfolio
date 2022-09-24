import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Pongamonos en contacto</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>MiCorreo@gmail.com</h5>
            <a href="mailto:pamelakane99@gmail.com">Envía un mensaje</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vicente Estrada</h5>
            <a href="https://m.me/vicente.estrada.33046" target="__blank">Envía un mensaje</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsaap</h4>
            <h5>+5500000000</h5>
            <a href="https://wa.me/525577220625" target="__blank">Envía un mensaje</a>
          </article>
        </div>
        {/* FIN DE LAS OPCIONES DE CONTACTO */}

        <form action="">
          <input type="text" name='name' placeholder='Tu nombre completo' required/>
          <input type="email" name="email" placeholder='Tu Email' required/>
          <textarea name="message" rows="10" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact