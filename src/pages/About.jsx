import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.5 }}
      className='flex flex-col w-full flex-1 items-center justify-start p-4'
    >
      <img src="/land-rover.svg" alt="" width='200' height='200' className='select-none' />
      <div className='flex gap-10 mt-10'>
        <img src="/defender/octa-1.jpg" alt="" width='250' height='100' className='select-none rounded-lg' />
        <img src="/defender/octa-2.jpg" alt="" width='250' height='100' className='select-none rounded-lg' />
        <img src="/defender/octa-3.jpg" alt="" width='250' height='100' className='select-none rounded-lg' />
      </div>
      <h1 className='text-4xl font-bold mt-15'>
        Sculpted for Purpose. Engineered for Excellence.
      </h1>
      <h3 className='text-lg max-w-xl text-center mt-10'>
        The Defender isn't just a vehicle; it is a design statement carved from a single block of aluminum. Whether viewed from the front, side, or rear, it projects a posture of quiet confidence.
      </h3>
    </motion.div>
  )
}

export default About