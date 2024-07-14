import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from 'react-icons/fa6';
import SideBar from './../components/SideBar';

const SingleBlog = () => {
    const data=useLoaderData();
    console.log(data);


     const  {id, title, image, category, author,published_date,reading_time,content}=data[0];

  return (
    <div>
         <div className=' py-40 bg-black text-center text-white px-4 '>
    <h1 className='text-5xl lg:text-7xl leading-snug  font-bold mb-5'> Single blog Page </h1>


    </div>

    <div className=' max-w-7xl mx-auto my-12 flex flex-row gap-5'>
        <div className='mx-auto lg:w-3/4'>


        <img  className="w-full mx-auto rounded" src={image}  />

        <h1 className='text-3xl font-bold mb-4 mt-5 text-blue-500 cursor-pointer'>{title}</h1>
         <p className='text-gray-600 mb-3'> <FaUser className='inline-flex items-center mr-2'/>{author}|{published_date}</p>
         <p className='text-gray-600 mb-3'> <FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
         <p className='text-base text-gray-500 mb-6'>{content}</p>
         <div>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>
            <p className='text-small text-gray-500 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste sapiente porro nemo blanditiis totam facilis<br/> doloremque deserunt hic iusto mollitia molestias, quia accusamus labore deleniti quasi temporibus aut quo.</p>

         </div>


        </div>
        <div className='lg:w-1/2'>
        <SideBar/>

        </div>
   



    </div>

    
    </div>
  )
}

export default SingleBlog