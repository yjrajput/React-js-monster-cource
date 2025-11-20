import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false)
  const navMenu = [
    {id: 1, path: '/', display: 'Home'},
    {id: 2, path: '/about', display: 'About'},
    {id: 3, path: '/country', display: 'Country'},
    {id: 4, path: '/contact', display: 'Contact'},
  ]

  const handleOnClick = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <header>
      <div className='container'>
        <div className='grid-container'>
          <div className='logo-container'>
            <Link to={'/'}>
            <h1>MyWorld</h1>
          </Link>
          </div>
          
          {/* dasktop menu */}
          <nav className='web-menu'>
            <ul>
              {
                navMenu.map(({id, path, display}) =>(
                  <li key={id}>
                    <NavLink  to={path}>
                      {display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          
          <div className='menu-btn'>
              <button onClick={handleOnClick}>
                  {showMenu ? <RxCross2 className='icons'/> : <IoMenu className='icons'/>}
              </button>
          </div>
            
          {
            showMenu && (
              <div className='mobile-nav'>
              <nav className='mobile-menu'>
            <ul>
              {
                navMenu.map(({id, path, display}) =>(
                  <li key={id}>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} onClick={handleOnClick}  to={path}>
                      {display}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
            )
          }
          
        </div>
      </div>
    </header>
  )
}

export default Navbar