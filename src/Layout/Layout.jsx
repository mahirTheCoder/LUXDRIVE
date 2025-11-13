import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Outlet/>
    </>
  )
}

export default Layout