import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  const navmenu = [
    {id: 1, path: '/', display: 'Home'},
    {id: 2, path: '/fetchold', display: 'FetchOld'},
    {id: 3, path: '/fetchrq', display: 'FetchQr'},
  ]
  return (
    <header>
      <div className='container'>
          <div className='header-container'>

            <div className='logo-container'>
                <Link to={'/'} >
                 <h1>TanStack</h1>
                </Link>
               
            </div>

            <nav>
            <ul className='nav-menu'>
              {
                navmenu.map((items) =>(
                  <NavLink to={items.path} key={items.id}>
                      <li >{items.display}</li>
                  </NavLink>
                  
                ))
              }
            </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header