import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import CardHeading from '../Components/CardHeading'
import Banner from '../Components/Banner'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardHeading></CardHeading>
      <Card></Card>
    </div>
  )
}

export default Home
