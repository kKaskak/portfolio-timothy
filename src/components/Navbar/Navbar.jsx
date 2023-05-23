import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { motion } from "framer-motion";

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }



const Navbar = () => {

  return (
    <nav id='navbar' className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <motion.a
             href={`#${item}`}
             whileHover= {{ scale: 1.1 }}
             className='app__navbar-el'
            >
            {item}</motion.a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar