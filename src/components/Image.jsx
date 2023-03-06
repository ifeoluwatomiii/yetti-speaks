import React from 'react'
import titi from '../assets/yetty.jpg'

const Image = () => {
  return (
    <div className='lg:hidden'>
      <img className='h-[500px] w-[100%] object-cover' src={titi} alt="" />
    </div>
  )
}

export default Image
