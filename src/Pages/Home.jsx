import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import CardHeading from '../Components/CardHeading'
import Banner from '../Components/Banner'
import HeaderSlider from '../Components/HeaderSlider'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderSlider></HeaderSlider>
      <CardHeading></CardHeading>
      <Card></Card>
      <Banner></Banner>
    </div>
  )
}

export default Home
