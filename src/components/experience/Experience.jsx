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
          <h3>Primary Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small><a href="https://learn.microsoft.com/en-us/dotnet/csharp/">Learn C#</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>.NET</h4>
                <small><a href="https://learn.microsoft.com/es-es/dotnet/">Learn .NET</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Azure</h4>
                <small><a href="https://learn.microsoft.com/es-es/azure/?product=popular">Learn AZURE</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>JS | TS</h4>
                <small><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">Learn JS</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small><a href="https://angular.io/docs">Learn Angular</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Relational Databases</h4>
                <small><a href="https://www.codecademy.com/learn/learn-sql">Learn SQL</a></small>
              </div>
            </article>
          </div>
        </div>

        {/*FIN DEL LA EXPERIENCIA FRONTEND */}

        <div className="experience__backend">
        <h3>Other Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small><a href="https://docs.oracle.com/en/java/">Learn Java</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small><a href="https://www.php.net/docs.php">Learn PHP</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small><a href="https://docs.python.org/3/">Learn Python</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Go</h4>
                <small><a href="https://learn.microsoft.com/en-us/training/paths/go-first-steps/">Learn Go</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small><a href="https://reactjs.org/docs/getting-started.html">Learn React</a></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience