import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './layout/components/Home'
import FetchOld from './layout/components/FetchOld'
import FetchRQ from './layout/components/FetchRQ'
const App = () => {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/fetchold',
            element: <FetchOld/>
          },
          {
           path: '/fetchrq',
           element: <FetchRQ/>
          }
        ]
      }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App