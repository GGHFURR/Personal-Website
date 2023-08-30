import React from 'react'
import './portofolio.css'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'

function portofolio() {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Prepp Studio Catalog</h3>
         <div className="portfolio__item-cta">
            <a href="https://www.instagram.com/preppstudio/"className='btn'>Instagram</a>
            <a href="https://www.instagram.com/preppstudio/"className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Dodge Maker</h3>
         <div className="portfolio__item-cta">
            <a href='https://www.instagram.com/dodgeofficial/'className='btn'>Instagram</a>
            <a href='https://www.instagram.com/dodgeofficial/'className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Kolder Picture</h3>
         <div className="portfolio__item-cta">
            <a href='https://www.instagram.com/koldercreative/'className='btn'>Instagram</a>
            <a href='https://www.instagram.com/koldercreative/'className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Wonderful Sumbar</h3>
         <div className="portfolio__item-cta">
            <a href='https://www.instagram.com/infosumbar/'className='btn'>Instagram</a>
            <a href='https://www.instagram.com/infosumbar/'className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>New Balance Article</h3>
         <div className="portfolio__item-cta">
            <a href='https://www.instagram.com/newbalance/'className='btn'>Instagram</a>
            <a href='https://www.instagram.com/newbalance/'className='btn btn-primary'>See</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Festival de Danse</h3>
         <div className="portfolio__item-cta">
            <a href='https://www.instagram.com/festivaldedancaoficial/'className='btn'>Instagram</a>
            <a href='https://www.instagram.com/festivaldedancaoficial/'className='btn btn-primary'>See</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default portofolio