import React from 'react'
import './service.css'
import {BsCheckLg} from 'react-icons/bs'
function service() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
        <div className='service__head'>
          <h3>Photography</h3>
        </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Professional lighting setup</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>photoshoots with necessary equipment</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Professional camera and lens kits</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Single-shooter and multi-shooter</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Result With Editing</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Complete photo library access</p>
            </li>
    
          </ul>
        </article>
        <article className='service'>
        <div className='service__head'>
          <h3>Videography</h3>
        </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Professional lighting setup</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Video-taking with necessary equipment</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Professional camera and lens kits</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Crew option when you need</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>All finest and coolest editing</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Avaible Hardfile</p>
            </li>
    
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
          <h3>Editing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Retouching and Grading your file</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Fully Edited Video/Photo</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Professional Handling Editing with huge software</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>All High-end Equipment</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Available re-editing for revision</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>The Best in around</p>
            </li>
    
          </ul>
        </article>
      </div>
    </section>
  )
}

export default service