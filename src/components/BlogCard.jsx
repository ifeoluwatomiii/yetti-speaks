import React from 'react'
import social from "../assets/media.jpg";


const BlogCard = ({...post}) => {
  return (
    <div className=''>
      <img src={social} alt="" />
      <h1 classname='font-bold text-2xl'>{post.title} </h1>
      <h3 classname='font-bold'>{post.body} <span classname='font-bold'>Read More</span></h3>

    </div>
  )
}

export default BlogCard
