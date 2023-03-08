import React from 'react'
import party from '../assets/concert.jpg'
import couple from '../assets/married.jpg'
import pots from '../assets/pottery.jpg'
import travel from '../assets/mozambique.jpg'


const About = () => {
  return (
    <div className='container  max-w-[1280px] mx-auto pb-[10%]'>
      <div className='flex w-[100%] gap-2 xl:gap-4 px-4 py-6 '>
        
        <img className='w-[33%] transition transform hover:hover:scale-110 duration-500 ease-in-out ' src={couple} alt="" />
        <img className='w-[33%] transition transform hover:hover:scale-110 duration-500 ease-in-out' src={pots} alt="" />
        <img className='w-[33%] transition transform hover:hover:scale-110 duration-500 ease-in-out' src={travel} alt="" />
      </div>
      <div className='px-4'>
        <h2 className='mb-2'>Welcome to Yetti Speaks! </h2>
        <p> This is a personal blog where I share my thoughts, experiences, and insights on various topics that interest me. My name is Yetunde Ajifowose, and I'm the creator and writer of this blog.
        I started Yetti Speaks as a way to express myself and share my voice with the world. I believe that everyone has a story to tell and that sharing our stories can help us connect and understand each other better. <br />
        <br />

        On this blog, you'll find posts about a wide range of topics, including personal growth, mental health, relationships, travel, and more. My goal is to create a safe and supportive space where we can have open and honest conversations about the things that matter to us. <br />
        <br />

        In addition to writing, I also love photography, music, and spending time in nature. I believe that creativity and self-expression are important parts of our lives, and I try to incorporate these things into my writing whenever I can. <br />
        <br />

        I hope that you enjoy reading my blog and that you find something here that resonates with you. If you have any questions, comments, or feedback, please feel free to reach out to me. I'd love to hear from you!
        <br />
        <br />

        Thank you for visiting Yetti Speaks.





</p>
      </div>
    </div>
  )
}

export default About
