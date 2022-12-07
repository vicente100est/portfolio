import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Tech Skills</h5>
      <h2>Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Principales herramientas</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>BD relacional</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Azure</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>.NET</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>C# y C++</h4>
                <small>Experto</small>
              </div>
            </article>
          </div>
        </div>

        {/*FIN DEL LA EXPERIENCIA FRONTEND */}

        <div className="experience__backend">
        <h3>Herremientas complementarias</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experto</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experto</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience