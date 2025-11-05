import React from 'react'

const Card = ({items}) => {
  return (
    <div className='card' key={items}>
                    <div className='image-container'>
                        <img src={items.image} alt={items.title} />
                    </div>

                    <div className='content-container'>
                      <h1>{items.title}</h1>
                      <p>{items.description}</p>
                      <p>{items.rating}</p>
                      <p>{items.genre}</p>
                      <button>Watch now</button>
                    </div>
                </div>
  )
}

export default Card