import React from 'react'
import { Header } from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { ConfirmOrder } from '../confirmOrder/ConfirmOrder'
import { Profile } from '../profile/Profile'
import { Preference } from '../preference/Preference'

export const Layout = () => {
  return (
    <>
  
    <Header />
      <Outlet  />
      <Footer />
    </>
  )
}
