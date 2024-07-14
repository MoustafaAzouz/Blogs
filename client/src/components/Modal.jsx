import React from 'react';

const Modal = ({ isModalOpen }) => {
  return (
    isModalOpen ? (
      <div className="fixed top-0 left-0  w-full  flex items-center justify-center h-full">
        <div className='bg-indigo-600 text-center p-5 h-96 lg:w-[500px] rounded shadow-md relative'>
            <h2 className='text-xl font-semibold mb-4 mt-6 uppercase'>Please login here ! </h2>

            <form action="">
                <div className='mb-3'>
                  <input type="email" id="email" name="email" placeholder='mousta@gmail.com' className='rounded w-full  border border-[#e0e0e0] bg-white font-medium outline-none focus:border-purple-400 focus:shadow-md px-3 py-3 text-blue-700'  />

                </div>
                <div className='mb-3'>
                  <input type="password" id="password" name="password" placeholder='Enter your password' className='rounded w-full  border border-[#e0e0e0] bg-white font-medium outline-none focus:border-purple-400 focus:shadow-md px-3 py-3 text-blue-700'  />

                </div>


            </form>



            <button className='rounded w-2/6 text-white hover:bg-black bg-gray-700 px-3 py-3 mt-14'>Login</button>


        </div>
    
      

        
      </div>
    ) : null
  );
}

export default Modal;
