import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing the FiMenu and FiX icons


const Header = () => {
  const path = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white mt-10 mb-8 px-4 py-2 md:px-8 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
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

        {/* Sliding window for navigation links */}
        <div className={`fixed top-0 right-0 h-full bg-white w-4/5 md:hidden z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <FiX className="w-6 h-6 text-black" />
            </button>
          </div>
          <nav className="flex flex-col items-center pt-8 gap-20">
            <Link to="/" className={`text-gray-800 ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`text-gray-800 ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
            <Link to="/project" className={`text-gray-800 ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
          </nav>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex md:items-center md:ml-auto md:justify-center bg-cream-white md:bg-transparent md:px-4 md:py-2">
          <ul className="md:flex gap-4">
            <li className="hidden md:block">
              <Link to="/" className={`text-white ${path === '/' ? 'font-bold' : ''}`} onClick={closeMenu}>Home</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/about" className={`text-white ${path === '/about' ? 'font-bold' : ''}`} onClick={closeMenu}>About</Link>
            </li>
            <li className="hidden md:block">
              <Link to="/project" className={`text-white ${path === '/projects' ? 'font-bold' : ''}`} onClick={closeMenu}>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
