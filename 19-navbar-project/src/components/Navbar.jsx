import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

    const[showMenu, setShowMenu] = useState(false);

    const handleOnClick = () =>{
        setShowMenu(!showMenu)
    }
  return (
    <header>
        <div className='container'>
            <div className='nav-container'>
                <div className='logo-container'>
                    <h1>MyShop</h1>
                </div>

            <nav className={showMenu ? 'mobile-menu' : 'web-menu'}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>

            <div className='menu-icon'>
                <button onClick={handleOnClick}>
                    <GiHamburgerMenu/>
                </button>
            </div>
            </div>
            
        </div>
    </header>
  )
}

export default Navbar