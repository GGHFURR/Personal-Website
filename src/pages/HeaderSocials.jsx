import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

function HeaderSocials() {
  return (
   <div className="header__socials">
       <a href="" target="_blank"><BsInstagram/></a>
       <a href="" target="_blank"><BsFacebook></BsFacebook></a>
       <a href="" target="_blank"><BsWhatsapp/></a>
   </div>
  )
}

export default HeaderSocials