import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './layout/components/Home'
import FetchOld from './layout/components/FetchOld'
import FetchRQ from './layout/components/FetchRQ'
import './App.css'
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

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
         <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
   
  )
}

export default App