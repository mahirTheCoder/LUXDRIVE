import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Rent from '../Components/Rent'
import RentBody from '../Components/RentBody'
import Collection from '../Components/Collection'

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
    </>
  )
}

export default Layout