import React from 'react'
import './experience.css'
import {TiPointOfInterestOutline} from 'react-icons/ti'
function experience() {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Production Skills</h3>
          <div className="experience__content">
          <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Director</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Camera-man</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Lighting</h4>
            <small className='text-light'>Master</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Art Director</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>D.O.P</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Make-Up Artist</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>

        {/* END OF FRONT END */}

        <div className="experience__backend">
        <h3>Pre-Production Skills</h3>
          <div className="experience__content">
            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Adobe Premier</h4>
            <small className='text-light'>Master</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Adobe After Effect</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Adobe Lightroom</h4>
            <small className='text-light'>Master</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Adobe Audition</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Photoshop</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience_details'>
            <TiPointOfInterestOutline className='experience__details-icon'/>
            <div>
            <h4>Media Encoder</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience