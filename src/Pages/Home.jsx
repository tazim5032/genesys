import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import CardHeading from "../Components/CardHeading";
import Banner from "../Components/Banner";
import HeaderSlider from "../Components/HeaderSlider";
import Footer from "../Components/Footer";
import Name from "../Components/Name";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderSlider />
      <CardHeading />
      <Card />
      <Banner />
      <Name />
      <div className=" bg-black">
       
        <hr className="container mx-auto border-t border-white opacity-50" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
