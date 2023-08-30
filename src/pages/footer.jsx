import React from 'react'
import './footer.css'
import{BsFacebook} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import{BsWhatsapp} from 'react-icons/bs'

function footer() {
  return (
   <footer>
     <h3>Ghafur</h3>
     
     <ul className="permalinks">
       <li><a href="/">Home</a></li>
       <li><a href="/experience">Experience</a></li>
       <li><a href="/service">Services</a></li>
       <li><a href="/portofolio">Portfolio</a></li>
       <li><a href="/contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
       <a href="https://www.facebook.com/fadlan.rizki.129/"><BsFacebook/></a>
       <a href="https://www.instagram.com/gghfurr/"><BsInstagram/></a>
       <a href="https://wa.me/085156595742"><BsWhatsapp/></a>
     </div>

     <div className="footer__copyright">
       <small>&copy; Gghfurr. All Right Reserved.</small>
     </div>
   </footer>
  )
}

export default footer