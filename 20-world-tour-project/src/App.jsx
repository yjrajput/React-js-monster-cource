import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './layout/Layout'
import Erroepage from './pages/Erroepage'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <Erroepage/>,
      children:[
        {
      path: '/',
      element: <Home/>
    },
    {
      path: '/country',
      element: <Country/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
      ]
    }
    
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App