import React from 'react'
import Carousel from '../Carousel'
import Department from '../Department'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/> 
        <Carousel/>
        <Department/>
        <Department/>
        <Department/>
        <Department/>
        <Department/>
        <Department/>
        <Department/>
        {/* <Footer/> */}
    </>
  )
}

export default Home