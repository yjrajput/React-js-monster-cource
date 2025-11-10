import React, { useContext } from 'react'
import { Data } from './ComponentsContext'

const Counter = () => {
    const {counter, handleOnClick} = useContext(Data)
  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={handleOnClick}>Increment</button>
    </div>
  )
}

export default Counter