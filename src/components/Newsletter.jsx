import React from 'react'
import fixed from '../assets/fixedImg.jpg'

const Newsletter = () => {
  return (
    <div className='py-[70px] '>
      <div className='text-center pb-6'>
      <h1 className='font-bold text-3xl'>Join My <span className='underline decoration-[#9b6f56bd] decoration-2 underline-offset-8'>Newsletter</span></h1>
      </div>
      <div className='flex flex-col gap-3 mt-4 justify-center lg:flex-row px-8'>
        <input className='border-2 py-2 px-2' type="name" placeholder='Full Name'/>
        <input  className='border-2 py-2 px-2' type="email" placeholder='Email Address'/>
        <button className='bg-black text-white py-2 px-12'>SUBSCRIBE</button>
      </div>

           
    </div>
  )
}

export default Newsletter
