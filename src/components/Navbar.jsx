import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {useState} from 'react'
import {VscClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex justify-between px-[50px] items-center py-4 bg-transparent'>
      <div>
        <h1 className='font-bold text-xl'>YETTI SPEAKS</h1>
      </div>

      {/* desktop navbar */} 
      <div className='flex gap-7 font-bold hidden xl:flex'>
        <Link className='transition transform hover:-translate-x-3' to="/">HOME</Link>
        <Link className='transition transform hover:-translate-x-3' to="/blog">BLOG</Link>
        <Link className='transition transform hover:-translate-x-3' to="/about">ABOUT</Link>
        <a className='transition transform hover:-translate-x-3' href="newsletter">CONTACT</a>
      </div>
      
      {/*mobile navbar */}

      <div className={
        isOpen ? "z-10 flex gap-8 list-none cursor-pointer xl:hidden flex-col transition-all ease-in duration-500 top-0 left-0 pl-5 bg-black/90 fixed h-[100vh] w-[100%] shadow-lg justify-center text-white items-center "
        : "flex gap-8 list-none cursor-pointer flex-col  top-0 left-[-100%] pl-5 bg-white fixed h-[100vh] w-[70%] shadow-lg pt-4 transition-all ease-out duration-500"
      } >

	    <a className='transition transform hover:-translate-x-3' href="hero">HOME</a>
        <a className='transition transform hover:-translate-x-3' href="Latest">BLOG</a>
        <a className='transition transform hover:-translate-x-3' href="">ABOUT</a>
        <a className='transition transform hover:-translate-x-3' href="Newsletter">CONTACT</a>
      </div>

      <div className='z-40 xl:hidden'>
        {isOpen ?
         (<VscClose
        className='w-[30px] h-[40px] text-white'
        title='Close'
        onClick={()=>setIsOpen(!isOpen)}/>):
        <RxHamburgerMenu className='cursor-pointer w-[20px] h-[25px]'
        title='Menu'
        onClick={()=> setIsOpen(!isOpen)}/>}
      </div>
        

    </div>
  )
}

export default Navbar
