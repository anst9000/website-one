import "./Navbar.css";
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";

export const Navbar = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)


  const handleLinkClick = () => {
    setClick(false)
  }

  useEffect(function setupListener() {
    const changeColor =() => {
      if (window.scrollY >= 100) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)

    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  })

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/'><h1>GLX TRVL</h1></Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li onClick={handleLinkClick}>
          <Link to='/'>Home</Link>
        </li>

        <li onClick={handleLinkClick}>
          <Link to='/pricing'>Pricing</Link>
        </li>

        <li onClick={handleLinkClick}>
          <Link to='/training'>Training</Link>
        </li>

        <li onClick={handleLinkClick}>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='hamburger' onClick={handleClick}>
      {
        click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)
      }
      </div>
  </div>
  )
}
