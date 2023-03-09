import React from 'react'
import titi from '../assets/yetty.jpg'
import shade from '../assets/white.jpg'

const Hero = () => {
  return (
    <div className=' py-2 flex container max-w-[1280px] mx-auto'>
        <div  className='bg-[#FCF1EA] py-[10%] w-[100%] lg:w-[60%] px-[9%]'>
            <h1 className='font-bold text-5xl mb-6'>Hello and welcome to Yetti Speaks </h1>
            <p>I'm so glad you found your way here. This is a place where I share my thoughts, musings, and experiences on a variety of topics, from mental health to personal growth to travel and everything in between.</p>
            <div className='flex gap-6 mt-6 items-center'>
                <button className='py-2 px-4 bg-[#af6c44a1] rounded-full hover:bg-[#9b6f56] text-white'>Read My Blogs</button>
                <a className='underline decoration-[#9b6f56bd] decoration-2 underline-offset-8' href="">Visit My Shop</a>
            </div>
           
        </div>
        <div className='bg-[#FCF9F8] w-[40%] hidden lg:flex'>
            <img className='w-[40%]' src={shade} alt="" />

           
        </div>
        <div className='hidden lg:flex'>
            <img className='w-[23%] absolute right-[23%] top-[26%] xl:top-[14%] xl:w-[19%] xl:right-[27%]' src={titi} alt="" />
        </div>
         
      
    </div>
  )
}

export default Hero
