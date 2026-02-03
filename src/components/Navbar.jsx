import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'experience' },
    { id: 3, link: 'about' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'projects' },
    { id: 6, link: 'certifications' },
    { id: 7, link: 'contact' },

  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.h1
            className="text-3xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${link}`}
                  className="text-gray-300 hover:text-white capitalize text-lg font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-10 text-gray-300 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {/* Mobile Menu */}
          {nav && (
            <motion.ul
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300"
            >
              {links.map(({ id, link }) => (
                <motion.li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  whileHover={{ scale: 1.1, color: '#fff' }}
                  onClick={() => setNav(false)}
                >
                  <a href={`#${link}`}>{link}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
