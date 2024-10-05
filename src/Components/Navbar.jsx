import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className="bg-[#EA2127]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto mr-2"
            />
            <span className="text-4xl font-extrabold text-white">VTMERCH</span>
          </div>

          <div className="flex items-center">
            <GiHamburgerMenu className="h-16 w-8 text-white"></GiHamburgerMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
