import React from 'react'
import { useNavigate } from 'react-router-dom';
import Errorimage from '../../public/Errorpage.png'
const Errorpage = () => {
    const navigate = useNavigate();
  return (
    <div className='Error-page'>
        <div className='error-container'>
            <img src={Errorimage} alt="error-page" />

            <div className='button-container'>
            <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    </div>
  )
}

export default Errorpage