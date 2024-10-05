import React from "react";
import img1 from '../assets/5.png'
import img2 from '../assets/6.png'
import img3 from '../assets/7.jpeg'
import img4 from '../assets/8.png'
const Banner = () => {
  return (
    <div className="bg-[#EA2127] h-[600px]">
      <h1 className="container mx-auto text-7xl">FUTURE LOOKS BRIGHTS!</h1>

      {/* <div className="container mx-auto relative flex items-center justify-center w-full top-10">
        
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto lg:gap-8">
          <div className="relative flex  w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img1}
              alt="Image 1"
            />
          </div>
          <div className="relative flex  w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img2}
              alt="Image 2"
            />
          </div>
          <div className="relative flex  w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img3}
              alt="Image 3"
            />
          </div>
          <div className="relative flex  w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img4}
              alt="Image 4"
            />
          </div>
          <div className="relative flex  w-full sm:w-auto">
            <img
              className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
              src={img1}
              alt="Image 5"
            />
          </div>
        </div>
       
      </div> */}
      <div className="text-[#FFFFFF] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      <div className="max-w-xs p-2 rounded-md shadow-md bg-[#EA2127]">
        <img
          src={img1}
          alt=""
          className="object-cover object-center w-full rounded-md h-72"
        />
        <div className="mt-2">
          <h2 className="text-sm font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="">$25</p>
          <p className="line-through">$35</p>
        </div>
      </div>
      <div className="max-w-xs p-2 rounded-md shadow-md bg-[#EA2127]">
        <img
          src={img2}
          alt=""
          className="object-cover object-center w-full rounded-md h-72"
        />
        <div className="mt-2">
          <h2 className="text-sm font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="">$25</p>
          <p className="line-through">$35</p>
        </div>
      </div>
      <div className="max-w-xs p-2 rounded-md shadow-md bg-[#EA2127]">
        <img
          src={img3}
          alt=""
          className="object-cover object-center w-full rounded-md h-72"
        />
        <div className="mt-2">
          <h2 className="text-sm font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="">$25</p>
          <p className="line-through">$35</p>
        </div>
      </div>
      <div className="max-w-xs p-2 rounded-md shadow-md bg-[#EA2127]">
        <img
          src={img4}
          alt=""
          className="object-cover object-center w-full rounded-md h-72"
        />
        <div className="mt-2">
          <h2 className="text-sm font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="">$25</p>
          <p className="line-through">$35</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
