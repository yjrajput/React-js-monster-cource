import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='container'>
        <div className='footer-card'>
          <div className='main-card'>
            <div className='logo-container'>
                <FaLocationDot className='footer-icon'/>
            </div>
            <div className='footer-content'>
              <h3>find us</h3>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          <div className='main-card'>
            <div className='logo-container'>
                <FaPhoneAlt className='footer-icon'/>
            </div>
            <div className='footer-content'>
              <h3>Call us</h3>
              <p>7694814323</p>
            </div>
          </div>

          <div className='main-card'>
            <div className='logo-container'>
                <IoMdMail className='footer-icon'/>
            </div>
            <div className='footer-content'>
              <h3>Mail us</h3>
              <p>contact@gmail.com</p>
            </div>
          </div>
            
        </div>
      </div>
        
    </div>
  )
}

export default Footer