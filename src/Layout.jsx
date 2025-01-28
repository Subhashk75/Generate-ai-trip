import React from 'react'
import HeaderSection from "./Components/Header/HeaderSection"
import FooterSection from "./Components/FooterSection/FooterSection"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <HeaderSection />
    <Outlet />
    <FooterSection />
    </>
  )
}

export default Layout;