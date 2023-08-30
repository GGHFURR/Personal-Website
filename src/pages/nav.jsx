import './nav.css'
import {BsPerson} from 'react-icons/bs'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {TiArchive} from 'react-icons/ti'

const Nav = () => {
  return (
    <nav>
      <a href='/' ><BsPerson/></a>
      <a href='/experience' ><BiBook/></a>
      <a href='/service' ><RiServiceLine/></a>
      <a href='/portofolio' ><TiArchive /></a>
      <a href='/contact' ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav