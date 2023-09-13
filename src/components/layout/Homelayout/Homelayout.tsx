import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../blocks'
import Footer from '../../blocks/homeblock/Footer'

const Homelayout = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
      </div>
  )
}

export default Homelayout