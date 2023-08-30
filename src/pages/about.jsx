import React from 'react'
import './about.css'
import ME from '../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {BiUser} from 'react-icons/bi'
import {FaPhotoVideo} from 'react-icons/fa'


const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
             
            <article className='about__card'>
              <BiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FaPhotoVideo className='about__icon'/>
              <h5>Project</h5>
              <small>80+ Complete</small>
            </article>

          </div>
          <p>
           Berawal dari keisengan membuat saya tergerak untuk benar-benar terjun ke dalam multimedia. Awalnya tidak menyangka akan sejauh ini akan tetapi di berkati doa oleh kedua orang tua, membuat saya percaya dan menggapai semuanya
          </p>
          <a href="https://wa.me/085156595742" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about