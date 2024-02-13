import { Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

import GrayWolf from '../assets/graywolf.svg';
import { useAppContext } from '../Context/AppContext';

const Header = () => {
  const path = useLocation().pathname;

  const { isLoggedIn } = useAppContext()

  return (
    <Navbar className="text-white bg-transparent mt-10">
      <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold">
        <img src={GrayWolf} alt="Logo" className="w-20 h-20 object-contain justify-center" />
      </Link>

      <div className="flex gap-2 md:order-2">
        <Navbar.Toggle />
      </div>

      {/* Add Navbar.Collapse component */}
      <Navbar.Collapse>
        {/* Wrap each link with Navbar.Link */}
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/" className="text-white">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to="/about" className="text-white">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to="/project" className="text-white ">Projects</Link>
        </Navbar.Link>

        {isLoggedIn && <Navbar.Link active={path === '/dashboard'} as={'div'}>
          <Link to="/dashboard" className="text-white ">Dashboard</Link>
        </Navbar.Link>}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
