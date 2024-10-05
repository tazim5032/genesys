import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-[#EA2127]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between h-16">

          <div className="flex items-center text-white">
           <div className="text-white">
           <img
              src={logo}
              alt="Logo"
              className="h-16 sm:h-[115px] w-auto sm:w-[115px] mr-2 text-white"
            />
           </div>
            <span className="text-2xl sm:text-7xl font-extrabold text-white font-montserrat">VTMERCH</span>
          </div>

          <div className="flex items-center">
            <GiHamburgerMenu className="h-12 sm:h-[40px] w-auto sm:w-[40px] text-white"></GiHamburgerMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
