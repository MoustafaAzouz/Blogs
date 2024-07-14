import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>

        <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>

            <div >   <p className='font-medium tracking-wide text-gray-300 hover:text-orange-500'>Category</p>
            <ul className='mt-2 space-y-2'>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">News</a>
                </li>

                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">World</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Games</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Reference</a>
                </li>
           
            </ul>
            </div>



            <div >   <p className='font-medium tracking-wide text-gray-300 hover:text-orange-500'>Apples</p>
            <ul className='mt-2 space-y-2'>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Web</a>
                </li>

                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Ecommerce </a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Bussines</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Entertainment</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Protofolio</a>
                </li>
           
            </ul>
            </div>





            <div >   <p className='font-medium tracking-wide text-gray-300 hover:text-orange-500'>cherry</p>
            <ul className='mt-2 space-y-2'>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Media</a>
                </li>

                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Nonprofit </a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Education</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Projects</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Brouchure</a>
                </li>
           
            </ul>
            </div>


            <div >   <p className='font-medium tracking-wide text-gray-300 hover:text-orange-500'>Business</p>
            <ul className='mt-2 space-y-2'>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Infopreneur</a>
                </li>

                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Personal </a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Wiki</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Forum</a>
                </li>
                <li>
                    <a className='text-gray-500 transition-colors duration-300 hover:text-orange-500' href="">Projects</a>
                </li>
           
            </ul>
            </div>
          








        </div>


        
        <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>  
                
                <p className='font-medium tracking-wide text-gray-300 hover:text-orange-500'>Subscirbe for updates</p>


                <form className='mt-4 flex flex-col md:flex-row'>
                 <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition  duration-300  bg-white-border border-gray-300 rounded shadow-sm md:mr-2 md:mb-0 focus:border-purple-300 focus:outline-none'  />
                 <button type="submit" className='inline-flex items-center jus  h-12 font-medium tracking-wide text-white transition duration-150 px-6   rounded shadow-md hover:bg-orange-500 focus:outline-none border '>Subscirbe</button>

                </form>
         
           </div>



            </div>

            <div className='flex flex-col justify-between border-t pb-10 pt-5 border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-400'>© Copyright 2023 | All right resereved</p>
                <div className='flex items-center mt-4 gap-3 sm:mt-0' >
                     <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter className='h-5 w-5'/></a>
                     <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaFacebook className='h-5 w-5'/></a>
                     <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram className='h-5 w-5'/></a>
                     </div>
            </div>
        </div>


    </div>
  )
}

export default Footer