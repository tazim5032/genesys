import React from "react";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.svg";
import instra from "../assets/instra.svg";

import email from "../assets/email.svg";
const Footer = () => {
  return (
    <footer className="footer bg-black p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <form>
          <h6 className="text-lg font-bold mb-4 font-montserrat">Subscribe and be the first to receive notifications about our upcoming releases and the latest news. </h6>
          <fieldset className="form-control w-full max-w-xs">
            {/* <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> */}
            <div className="flex space-y-2 flex-col font-inter">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full bg-black border-white text-center"
              />
              <button className="btn btn-white text-[#222222]">Subscribe</button>
            </div>
          </fieldset>
        </form>

        {/* Services Section */}
        <nav>
          <h6 className=" text-lg font-bold mb-4 font-inter">
            Customer Services
          </h6>
          <ul className="space-y-2 font-inter opacity-[80%]">
            <li>
              <a className="link link-hover ">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Search</a>
            </li>
            <li>
              <a className="link link-hover">Privacy Policy</a>
            </li>
            <li>
              <a className="link link-hover">Contact Us</a>
            </li>
            <li>
              <a className="link link-hover">Terms of Service</a>
            </li>
            <li>
              <a className="link link-hover">Refund Policy</a>
            </li>
            <li>
              <a className="link link-hover">Track Order</a>
            </li>
          </ul>        </nav>

        {/* Company Section */}
        <nav>
          <h6 className=" text-lg font-bold mb-4 font-inter">Products</h6>
          <ul className="space-y-2 font-inter opacity-[80%]">
            <li>
              <a className="link link-hover">Featured Products</a>
            </li>
            <li>
              <a className="link link-hover">Bestseller</a>
            </li>
            <li>
              <a className="link link-hover">Latest Product</a>
            </li>
            <li>
              <a className="link link-hover">All Collections</a>
            </li>
            <li>
              <a className="link link-hover">All Products</a>
            </li>
          </ul>        </nav>

        {/* Legal Section */}
        <nav>
          <h6 className=" text-lg font-bold mb-4 font-inter">Contact Us</h6>
          <div className="space-y-2 font-inter opacity-[80%]">
            <p>
              Available between 8AM to 8PM. Ready <br></br> to answer your
              questions.
            </p>
            <div className="flex flex-row gap-2">
              <img src={phone} alt="Logo" className=" text-white h-4 w-4" />
              <p>013456789</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src={email} alt="Logo" className=" text-white h-4 w-4" />
              <p>store@valuetainment.com</p>
            </div>
            <div className="flex flex-row gap-2">
            <img src={facebook} alt="Logo" className=" text-white h-4 w-4" />
            <img src={twitter} alt="Logo" className=" text-white h-4 w-4" />
            <img src={linkedin} alt="Logo" className=" text-white h-4 w-4" />
            <img src={instra} alt="Logo" className=" text-white h-4 w-4" />

            </div>
          </div>        </nav>
      </div>
    </footer>
  );
};

export default Footer;
