// Importing necessary dependencies and hooks from React and React Router
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing the FiMenu and FiX icons
import { useAppContext } from '../Context/AppContext';

// Header component
const Header = () => {
  // Getting the current path using useLocation hook from React Router
  const path = useLocation().pathname;
  // State to control the opening and closing of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Accessing isLoggedIn state from context using useAppContext hook
  const { isLoggedIn } = useAppContext();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // JSX for the header component
  return (
    <header className="text-white mt-10 mb-8 px-4 py-2 md:px-8 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Link to home */}
        <Link
          to="/"
          className="self-center text-lg sm:text-xl font-semibold flex items-center hover:underline"
        >
          Graywolf
        </Link>

        {/* Hamburger menu button for mobile view */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 h-full bg-white w-4/5 md:hidden z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <FiX className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Navigation links in mobile menu */}
          <nav className="flex flex-col items-center pt-8 gap-20">
            {/* Conditional rendering of navigation links based on user authentication */}
            {isLoggedIn && (
              <>
                <Link to="/" className={`text-gray-800 ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={`text-gray-800 ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
                <Link to="/project" className={`text-gray-800 ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
                <Link to="/dashboard" className={`text-gray-800 ${path === '/dashboard' ? 'font-bold' : ''}`} onClick={closeMenu}>Dashboard</Link>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Link to="/" className={`text-gray-800 ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={`text-gray-800 ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
                <Link to="/project" className={`text-gray-800 ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
              </>
            )}
          </nav>
        </div>

        {/* Navigation links for desktop view */}
        <nav className="hidden md:flex md:items-center md:ml-auto md:justify-center bg-cream-white md:bg-transparent md:px-4 md:py-2">
          <ul className="md:flex gap-4">
            {/* Conditional rendering of navigation links based on user authentication */}
            {isLoggedIn && (
              <>
                <Link to="/" className={`text-white ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={`text-white ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
                <Link to="/project" className={`text-white ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
                <Link to="/dashboard" className={`text-white ${path === '/dashboard' ? 'font-bold' : ''}`} onClick={closeMenu}>Dashboard</Link>
              </>
            )}

            {!isLoggedIn && (
              <>
                <Link to="/" className={`text-white ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/about" className={`text-white ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
                <Link to="/project" className={`text-white ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
