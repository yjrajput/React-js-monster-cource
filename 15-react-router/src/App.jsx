
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About'
import Movies from './pages/Movies'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Errorpage from './pages/Errorpage'
import { Apidata } from './db/Apidata'
import MovieDetails from './pages/MovieDetails'
import { Dynamicdata } from './db/Dynamicdata'
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
        element: <Movies/>,
        loader: Apidata
      },
      {
        path: '/movies/:movieID',
        element: <MovieDetails/>,
        loader: Dynamicdata
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