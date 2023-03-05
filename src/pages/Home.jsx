import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Image from '../components/Image'
import Newsletter from '../components/Newsletter'
import Video from '../components/Video'
import Latest from '../components/Latest'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Image />
        <Hero />
        <Newsletter />
        <Video />
        
        <Latest />
    </div>
  )
}

export default Home