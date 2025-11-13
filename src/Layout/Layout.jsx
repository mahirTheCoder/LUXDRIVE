import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Rent from '../Components/Rent'
import RentBody from '../Components/RentBody'
import Collection from '../Components/Collection'
import Works from '../Components/Works'
import Service from '../Components/Service'
import Customers from '../Components/Customers'
import Footer from '../Components/Footer'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Outlet/>
    <Hero/>
    <Rent/>
    <RentBody/>
    <Collection/>
    <Works />
    <Service />
    <Customers/>
    <Footer/>
    </>
  )
}

export default Layout