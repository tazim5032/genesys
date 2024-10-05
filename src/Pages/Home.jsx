import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import CardHeading from '../Components/CardHeading'
import Banner from '../Components/Banner'
import HeaderSlider from '../Components/HeaderSlider'
import Footer from '../Components/Footer'
import Name from '../Components/Name'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderSlider></HeaderSlider>
      <CardHeading></CardHeading>
      <Card></Card>
      <Banner></Banner>
      <Name></Name>
      <Footer></Footer>
    </div>
  )
}

export default Home
