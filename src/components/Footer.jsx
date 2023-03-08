import React from 'react'
import { Link } from 'react-router-dom'
import {GrFacebookOption, GrTwitter, GrPinterest} from 'react-icons/gr'
import {FaInstagram, FaTiktok, FaPodcast} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='flex justify-around py-4 px-4 border shadow-sm flex-col xl:flex-row'>
      <div>
        <Link className='font-bold text-xl' to="./">YETTI SPEAKS</Link>
      </div>
      <div className='flex flex-col font-semibold'>
        <Link className='transition transform hover:-translate-x-3 pb-3' to="/">HOME</Link>
        <Link className='transition transform hover:-translate-x-3 pb-3' to="/blog">BLOG</Link>
        <Link className='transition transform hover:-translate-x-3 pb-3' to="/about">ABOUT</Link>
        <Link className='transition transform hover:-translate-x-3' href="newsletter">CONTACT</Link>
      </div>
      <div className=''>
        <p>You can follow us on <br /> any of our socials:</p>
        <div className='flex gap-4 mt-4'>
        <GrTwitter className='transition transform hover:hover:scale-110 duration-400 ease-in-out' title='Twitter'/>
        <FaInstagram className='transition transform hover:hover:scale-110 duration-400 ease-in-out' title='Instagram'/>
        <GrFacebookOption className='transition transform hover:hover:scale-110 duration-400 ease-in-out' title='Facebook'/>
        <GrPinterest className='transition transform hover:hover:scale-110 duration-400 ease-in-out' title='Pintrest'/>
        <FaTiktok className='transition transform hover:hover:scale-110 duration-400 ease-in-out' title='Tiktok'/>
        <FaPodcast className='transition transform hover:hover:scale-110 duration-400 ease-in-out' title='Podcast'/>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
