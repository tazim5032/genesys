import React from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";

const Card = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-[101px]">
      <div className="max-w-xs p-2 rounded-md shadow-md bg-white">
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
      <div className="max-w-xs p-2 rounded-md shadow-md bg-white">
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
      <div className="max-w-xs p-2 rounded-md shadow-md bg-white">
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
      <div className="max-w-xs p-2 rounded-md shadow-md bg-white">
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
  );
};

export default Card;
