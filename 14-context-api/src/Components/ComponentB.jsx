import React, { useContext } from 'react'
import { Data } from './ComponentsContext'

const ComponentB = () => {
    const {name, age} = useContext(Data)
  return (
    <div>
        <h1>Hello i'm from component A my name is {name} and i'm {age} year old.</h1>
    </div>
  )
}

export default ComponentB