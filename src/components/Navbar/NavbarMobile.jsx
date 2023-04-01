import React, {useEffect} from 'react'
import './Navbar.scss'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimentions";
import { MenuToggle } from "./MenuToggle";
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 260px 40px)",
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1

  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0
  }
};


const NavbarMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const ulVariants = document.querySelector('.ul-variants');
    const itemMobile = document.querySelectorAll('.items')
    const height = document.querySelector('.navbar-mobile');
    function toggleActive() {
      ulVariants.classList.toggle('active');
      if(height.classList.contains('active-1')) {
        setTimeout(() => {
          height.classList.toggle('active-1');
        }, 500);
      } else {
        height.classList.toggle('active-1');
      }
    }
    function toggleAll() {
      toggleOpen()
      toggleActive()
    }
    hamburger.addEventListener('click', toggleActive);
     itemMobile.forEach(item => item.addEventListener('click', toggleAll));
    return () => {
      hamburger.removeEventListener('click', toggleActive);
       itemMobile.forEach(item => item.removeEventListener('click', toggleAll));
    };
  }, [], []);

  return (
      <motion.div initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} className='navbar-mobile'>
          <motion.div className="background" variants={sidebar} />
              <motion.ul className="ul-variants" variants={variants}>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <motion.li className="li-variants" variants={variants} whileHover={{ scale: 1.1}}  key={item} whileTap={{ scale: 0.95 }} transition={{duration: 0.2}}>
                    <a className='items' href={`#${item}`}>{item}</a>
                  </motion.li>
                ))}
              </motion.ul>
            <MenuToggle toggle={() => toggleOpen()}/>
      </motion.div> 
  )
}

export default NavbarMobile