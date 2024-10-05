import React from 'react'
import logo from '../assets/logo2.png'
const Name = () => {
  return (
    <nav className="bg-[#000000]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 sm:h-[115px] w-auto sm:w-[115px] mr-2 text-red-500"
            />
            <span className="text-2xl sm:text-7xl font-extrabold text-white">VTMERCH</span>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Name
