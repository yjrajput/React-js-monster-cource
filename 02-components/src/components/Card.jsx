import React from 'react'
import Heading from './Heading'
import ImageComponent from './ImageComponent'
import About from './About'
import Button from './Button'
const Card = () => {
  return (
    <div>
        <ImageComponent/>

        <div className='content-container'>
      <Heading/>
      <About/>
      <Button/>
      </div>
    </div>
  )
}

export default Card