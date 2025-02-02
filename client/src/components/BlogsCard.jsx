import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';

const BlogsCard = ({blogs,currentPage,selecteCategory,pageSize}) => {
    const filteredblogs=blogs
    .filter((blogs)=>!selecteCategory ||blogs.category===selecteCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize)

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-8'>
        {
        filteredblogs.map((blog)=>
            <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>

                <div >
                <img src={blog.image} alt=""  className='w-full'/>
                </div>
                <h1 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h1>
                  <p className='mb-2 text-gray-500 '><FaUser className='inline-flex  items-center mr-3'/>{blog.author}</p>
                <p className='text-sm text-gray-500'>   Published:{blog.published_date}</p>





            </Link>



  )

        }
        </div>
  )
}

export default BlogsCard