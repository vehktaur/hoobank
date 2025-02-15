'use client';

import { HamburgerIcon } from '@/assets/svgs';
import Logo from './ui/logo';
import NavLink from './ui/nav-link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Navbar = () => {
  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About Us',
      path: '/about',
    },
    {
      label: 'Features',
      path: '/features',
    },
    {
      label: 'Solution',
      path: '/solutions',
    },
  ];

  // State to manage the mobile menu open/closed status
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className='padding-inline fixed top-0 z-50 w-full ~py-6/[1.87rem]'>
      <div className='container flex w-full items-center justify-between gap-8'>
        {/* Site logo */}
        <NavLink className='block' href='/'>
          <Logo />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className='hidden items-center ~text-sm/base ~gap-8/14 sm:flex'>
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                className='block transition-all duration-300 hover:text-white'
                activeClassName='text-white'
                href={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger menu */}
        <div className='relative sm:hidden'>
          <button onClick={() => openMenu()}>
            <HamburgerIcon menuOpen={menuOpen} className='size-7' />
          </button>

          {/* mobile nav */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '100%' }}
                className='bg-black-gradient absolute right-0 top-[115%] flex min-w-44 flex-col rounded-xl pb-5 pt-4 text-center text-sm'
              >
                {navLinks.map(({ label, path }) => (
                  <li key={path}>
                    <NavLink
                      className='block py-1.5 transition-all duration-300 hover:scale-105 hover:text-white'
                      activeClassName='text-white'
                      href={path}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
