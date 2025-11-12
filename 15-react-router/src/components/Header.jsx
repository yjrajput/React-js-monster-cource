import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    const navMenu = [
        {path: '/', display: 'Home'},
        {path: '/movies', display: 'Movies'},
        {path: '/about', display: 'About'},
        {path: '/contact', display: 'Contact'},
    ]
  return (
    <div className='container'>
        <section className='nav-section'>
        <div className='top-bar'>
            <div className='topbar-content'>
                <p>Get Membership. 30 days return or refund guaranted.</p>

                <div className='authentication-section'>
                    <a href="#">Sing In</a>
                    <a href="#">Sing Up</a>
                </div>
            </div>
        </div>


        <nav className='navbar'>
            <div className='logo-container'>
                <h1>MyShop</h1>
            </div>

            <ul>
                {
                    navMenu.map((navItems) =>(
                        <div className='nav-container' key={navItems.display}>
                        <NavLink className={({isActive}) => isActive ? 'active' : '' } to={navItems.path}>{navItems.display}</NavLink>
                        </div>
                    ))
                }
            </ul>
        </nav>
        </section>
    </div>
  )
}

export default Header