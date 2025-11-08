import React, { useState } from 'react'

const Objects = () => {
    const [name, updateName] = useState([
        {id: 1, name: 'Yuvraj'},
        {id: 2, name: 'Kanishk'},
        {id: 3, name: 'Abhishek'},
    ])

    const handleOnUpadte = () =>{
        updateName(name.map((m) => m.id === 1 ? {...m, name: 'Batman'} : m))
    }
  return (
    <div>
        {
            name.map((items) =>(
                <ul key={items.id}>
                    <li>{items.name}</li>
                </ul>
            ))
        }
        <button onClick={handleOnUpadte}>Update name</button>
    </div>
  )
}

export default Objects