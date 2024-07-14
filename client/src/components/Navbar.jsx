import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from 'react-icons/fa6';
import Modal from './Modal';

const Navbar = () => {
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/services', link: 'Services' },
    { path: '/about', link: 'About' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
  ];

  const [isMenuOpen, setMenu] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!isModalOpen);
  }

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  }

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 flex justify-between mx-auto max-w-7xl items-center'>
        <a href="/" className='text-xl font-bold text-white'>
          Design <span className='text-orange-500'>Dk</span>
        </a>
        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({ path, link }) => (
            <li className='text-white' key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? 'active text-orange-600 underline underline-offset-4' : isPending ? 'pending' : ''
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
          <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
          <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
          <button
            className='bg-orange-500 px-5 py-1 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in duration-100'
            onClick={toggleModal}
          >
            log in
          </button>
        </div>
        <div className='md:hidden'>
          <button className='cursor-pointer' onClick={toggleMenu}>
            {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
          </button>
        </div>
      </nav>
      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 mt-14 bg-white px-4 py-6 ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
          {navItems.map(({ path, link }) => (
            <li className='text-black' key={path}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? 'active text-orange-600 underline underline-offset-4' : isPending ? 'pending' : ''
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Modal isModalOpen={isModalOpen} />
    </header>
  );
}

export default Navbar;
