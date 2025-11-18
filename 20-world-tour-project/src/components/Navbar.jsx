import React, { useState } from 'react'
    import { Link, NavLink } from 'react-router-dom';
    import { IoMenu } from "react-icons/io5";
    import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const nevMenus = [
    {id: 1, path: '/', display: 'Home'},
    {id: 2, path: '/about', display: 'About'},
    {id: 3, path: '/country', display: 'Country'},
    {id: 4, path: '/contact', display: 'Contact'},
  ]
  return (
    <header>
      
        <div className='container'>
          <div className='content-container'>
            <div className='logo-container'>
              <Link to={'/'}><h1>MyWorld</h1></Link>
            </div>

            <nav className={showMenu ? 'mobile-menu' : 'web-menu'}>
              <ul >
                {
                  nevMenus.map(({id, path, display}) =>(
                    <li key={id}>
                      <NavLink className={({isActive}) => isActive ? 'active' : ''} to={path}>{display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>

            <div className='mobile-menu'>
              <button onClick={() => setShowMenu(!showMenu)}>
                {!showMenu ? <IoMenu className='icon'/> : <RxCross2 className='icon'/>}
              </button>
            </div>
        </div>
        </div>
      
    </header>
  )
}

export default Navbar