import React, { useState } from 'react'

const DerivedState = () => {
  const [user, setUser] = useState([
    {id: 1, name: 'Yuvraj', age: 22},
    {id: 2, name: 'Kanishk', age: 32},
    {id: 1, name: 'Bob', age: 55},
  ])
  const useCount = user.length;
  const averageAge = (user.reduce((acu, curEle) => acu + curEle.age, 0) / useCount)
  return (
    <div>
      {
        user.map((items) =>(
          <ul key={items.id}>
            <li>{items.name}</li>
            <li>{items.age}</li>
          </ul>
        ))
      }
      <h1>{averageAge}</h1>
    </div>
  )
}

export default DerivedState