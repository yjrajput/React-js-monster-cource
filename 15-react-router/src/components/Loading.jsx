import React from 'react'
import loading from '../../public/loadingimage.png'
const Loading = () => {
  return (
    <div className='loading-container'>
        <img src={loading} alt="loading" />
    </div>
  )
}

export default Loading