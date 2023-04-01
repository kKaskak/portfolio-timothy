import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query  = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])
  
  return (
    <>
      <motion.h2 whileInView={{ opacity: [0 , 1], y: [-100, 0]}}  transition={{ duration: 0.7, type: 'tween' }} id='about' className='head-text app__about-header'>From <span>Idea </span>to Reality: <br />My Dynamic <span>Development</span> Approach</motion.h2>

      <div className='app__profiles'>
        {abouts.sort().map((about, index) => (
          <motion.div
          whileInView={{ opacity: [0 , 1],  y: [-100, 0] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, type: 'tween'}}
          className='app__profile-item'
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')