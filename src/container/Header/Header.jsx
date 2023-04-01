import React from 'react'
import { delay, motion, useCycle } from "framer-motion";
import './Header.scss'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
const scaleVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.6,
    }
  }
}
const scaleVariants1 = {
  hidden: { opacity: 0, x: -200 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
 
}
const scaleVariants2 = {
  hidden: {y: -100, opacity: 0},
  show: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5, delayChildren: 0.7, delay: 0.7}
  }  
}
const scaleVariants2Children = {
  hidden: {x: -100, scale: 0},
  show: {
    x: 0,
    scale: 1,
    transition: { duration: 1,  ease: 'easeInOut'}
    }
}

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
}
const opacity = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 }
}
const Header = () => {
  return (
    <div id= 'home' className='app__header app__flex'>
      <motion.div
        whileInView={scaleVariants1.show}
        variants={scaleVariants1}
        className="app__header-info"
        initial="hidden"
        animate="show"
      >
        <div className="app__header-badge">
          <motion.div variants={opacity}  whileTap={{scale: 1.1, transition:{ type: 'tween', duration: 0.5}}} className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Timothy</h1>
            </div>
          </motion.div>

          <motion.div variants={opacity} whileTap={{scale: 1.1, transition:{ type: 'tween', duration: 0.5}}} className="tag-cmp app__flex">
            <p className="p-text">Front-end</p>
            <p className="p-text">Developer</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={scaleVariants2}
        whileInView={scaleVariants2.show}
        initial="hidden"
        animate="show"
        className="app__header-img"
      >
        <img src={images.me2} alt="profile_bg" />
        <motion.img
          variants={scaleVariants2Children}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
       className="app__header-circles"
       variants={scaleVariants}
       initial="hidden"
        animate="show"
     
      >
          {
            [images.html, images.javascript, images.sass].map((circle, index) => (
              <motion.div
              variants={item}
              className='circle-cmp app_flex' key={`circle-${index}`}>
                 <motion.img whileInView={{ opacity: [0 , 1]}}  transition={{ duration: 0.2, type: 'tween', delayChildren: 1.1, staggerChildren: 0.6 }} src={circle} whileHover={{scale: 1.1}} whileTap={{scale: 0.6, rotate: -180, transition:{ type: 'tween', duration: 0.5}}} alt="circle" />
              </motion.div>
            ))
          }
      </motion.div>
    </div>
  )
}
// export default Header
export default AppWrap(Header, 'home')