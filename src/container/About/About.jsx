import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import { hover, appProfiles, h2 } from './about-animations'

const About = () => {
  const [isLoading, setIsLoading] = useState(true)
  // -> Connecting to sanity 
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query  = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => setAbouts(data))
    setIsLoading(false)
  }, [])

  return (
    <>
    {!isLoading && (
      <>
      <motion.h2 variants={h2} initial={'hidden'} whileInView={'show'} viewport={{ once: true, amount: 0.2 }}  id='about' className='head-text app__about-header'>From <span>Idea </span>to Reality: <br />My Dynamic <span>Development</span> Approach</motion.h2>

        <motion.div className='app__profiles'>
          {abouts.sort().map((about, index) => (
            <motion.div
              variants={appProfiles}
              initial={'hidden'}
              whileInView={'show'}
              whileHover={hover}
              viewport={{ once: true, amount: 0.2}}
              className='app__profile-item'
              key={about.title + index}
            >
              <motion.img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </>
    )}
    </>
  )
}

export default AppWrap(About, 'about')

