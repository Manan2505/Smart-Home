import React, { useState } from 'react';
import logo from "./images/logo (2).png";
import { Link } from 'react-router-dom';
import LoginSignup from './LoginSignup';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    window.scrollTo(0, 0);
  }

  return (
    <div className="relative">
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-4 mx-3">
        {/* Logo */}
        <Link to="/">
          <img src={logo} className="pt-2" width="70px" alt="Logo" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden z-10 fixed right-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            width="40px"
            alt="Menu Icon"
          />
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col lg:flex-row lg:flex gap-10 font-bold text-2xl lg:static absolute top-16 left-0 w-full bg-purple-400 lg:bg-transparent lg:top-0 lg:w-auto py-5 lg:py-0 shadow-lg lg:shadow-none`}
        >
          <li><Link to="/" onClick={toggleMenu} className="group hover:text-purple-900">Home <div className="h-1 w-full group-hover:bg-purple-300"></div></Link></li>
          <li><Link to="/digital" onClick={toggleMenu} className="group hover:text-purple-900">Digital <div className="h-1 w-full group-hover:bg-purple-300"></div></Link></li>
          <li><Link to="/access" onClick={toggleMenu} className="group hover:text-purple-900">Access Control <div className="h-1 w-full group-hover:bg-purple-300"></div></Link></li>
          <li><Link to="/about" onClick={toggleMenu} className="group hover:text-purple-900">About <div className="h-1 w-full group-hover:bg-purple-300"></div></Link></li>
        </ul>

        {/* Login/Sign Up Buttons */}
        <div className="space-x-3 hidden lg:block">
          {/* <Link to="/identity">
            <button className="bg-blue-100 py-2 px-4 rounded-lg hover:bg-blue-200 text-black">Login</button>
          </Link>
          <Link to="/identity">
            <button className="bg-blue-300 py-2 px-4 rounded-lg hover:bg-blue-400 text-black">Sign Up</button>
          </Link> */}
          <LoginSignup/>
        </div>
      </div>
      
      {/* Conditional Buttons Display for Mobile */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 lg:hidden">
          <Link to="/identity" onClick={toggleMenu}>
            <button className="bg-blue-100 py-2 px-4 rounded-lg hover:bg-blue-200 text-black w-2/3">Login</button>
          </Link>
          <Link to="/identity" onClick={toggleMenu}>
            <button className="bg-blue-300 py-2 px-4 rounded-lg hover:bg-blue-400 text-black w-2/3">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
