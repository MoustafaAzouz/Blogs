import React from 'react'
import About from './../pages/About';
import {FaArrowRight} from "react-icons/fa6"
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
         
         <div className='text-white text-center'>
            
            <h1 className='text-5xl lg:text-7xl leading-snug  font-bold mb-5'> Welcome to Our Blogs </h1>
                <p className='text-gray-300 mb-5 mx-auto lg:w-3/5 font-primary'>start your blog and join a community of writers and readers who are passionate About
                    sharing their stories and ideas.We offer everything you need to get started,from helpful tips and tutorials.
                </p>
         <div>
             <Link to="" className='font-medium hover:text-orange-500 inline-flex items-center '>  learn more < FaArrowRight className='mt-1 ml-2'/> </Link>            
             </div>
          
</div>
    </div>

  )
}

export default Banner