import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';
import Pagination from './Pagination';
import Category from './Category';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage,setcurrentPage]=useState(1);
  const pageSize=12; //blog per page 
  const [selecteCategory,setSelectedCategory]=useState(null);
  const [activeCateogry,setActiveCategory]=useState(null);

  useEffect(() => {
    async function fetchData() {
    let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      if(selecteCategory){
        url+=`&category=${selecteCategory}`;
        console.log("work");


      }
      const response = await fetch(url); 
      const data = await response.json(); // Await the response.json() call
      setBlogs(data);
    }

    fetchData(); // Call the fetchData function
  }, [currentPage,pageSize,selecteCategory]); // Empty dependency array, will run only once when component mounts
 

   const handlePageChange=(pageNumber)=>{
    setcurrentPage(pageNumber);


   }
   const handleCatogeryChange=(category)=>{
    setSelectedCategory(category);
    setcurrentPage(1);
    setActiveCategory(category);
    
   }




  return (
    <div>
  <div>
     <Category   onselectedcategory={handleCatogeryChange} activeCateogry={activeCateogry}/>
  
  </div>

  {}


  <div className="flex flex-col lg:flex-row gap-12">

    <BlogsCard blogs={blogs} currentPage={currentPage} selecteCategory={selecteCategory} pageSize={pageSize} />
  
  
  
  
  
  
  <div><SideBar/></div>
  
  
  
  </div>





  <div>
  <Pagination   onpagechange={handlePageChange}  currentPage={currentPage} blogs={blogs}  pageSize={pageSize}  />
  </div>


  </div>

  )
};

export default BlogPage;
