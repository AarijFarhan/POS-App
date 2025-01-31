import React from 'react'
import Navigation from '../Pages/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'




function Layout() {
  return (
    <>
   <Navigation />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout