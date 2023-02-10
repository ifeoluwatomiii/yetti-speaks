import React from 'react'
import titi from '../assets/yetty.jpg'
import shade from '../assets/white.jpg'

const Hero = () => {
  return (
    <div className=' py-2 flex container max-w-[1280px] mx-auto'>
        <div  className='bg-[#FCF1EA] py-[10%] w-[70%] xl:w-[60%] px-[9%]'>
            <h1 className='font-bold text-5xl mb-6'>Hello and welcome to Yetti Speaks</h1>
            <p>Lorem ipsum dolor sit amet con sectetur adi piscing elit, <br /> sed do eius mod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no strud exer citation.</p>
            <div className='flex gap-6 mt-6 items-center'>
                <button className='py-2 px-4 bg-[#af6c44a1] rounded-full hover:bg-[#9b6f56] text-white'>Read My Blog</button>
                <a className='underline decoration-[#9b6f56bd] decoration-2 underline-offset-8' href="">Visit My Shop</a>
            </div>
           
        </div>
        <div className='bg-[#FCF9F8] w-[40%]'>
            <img className='w-[40%]' src={shade} alt="" />

           
        </div>
        <div className='hidden xl:flex'>
            <img className='w-[20%] fixed right-[25%] top-[17%]' src={titi} alt="" />
        </div>
         
      
    </div>
  )
}

export default Hero
