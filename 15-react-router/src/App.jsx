
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About'
import Movies from './pages/Movies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Errorpage from './pages/Errorpage'
const App = () => {
    const router = createBrowserRouter([
      {
        path:'/',
        element: <Layout/>,
        errorElement: <Errorpage/>,
        children: [
          {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/movies',
        element: <Movies/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
        ]
      }
      
    ])

    //* old way
    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route>
    //       <Route path='/' element = {<Home/>}/>
    //       <Route path='/about' element = {<About/>}/>
    //       <Route path='/movies' element = {<Movies/>}/>
    //       <Route path='/contact' element = {<Contact/>}/>
    //     </Route>
    //   )
    // )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App