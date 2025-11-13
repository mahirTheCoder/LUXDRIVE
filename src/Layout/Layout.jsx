import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Rent from '../Components/Rent'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Outlet/>
    <Hero/>
    <Rent/>
    </>
  )
}

export default Layout