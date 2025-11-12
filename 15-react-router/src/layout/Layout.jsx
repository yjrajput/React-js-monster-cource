import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'

const Layout = () => {

  const navigate = useNavigation();

  if(navigate.state === 'loading') return <Loading/>
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout