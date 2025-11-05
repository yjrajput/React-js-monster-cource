import React from 'react'

const Products = ({products}) => {
  return (
    <div>
        {
            products.map((items) =>(
                <ul key={items.id}>
                    <li>{items.name}</li>
                    <li>{items.price}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Products