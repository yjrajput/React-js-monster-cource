import React from 'react'
import { useState } from 'react'
import Objects from './components/Objects';
import DerivedState from './components/DerivedState';

const App = () => {
  const [count, setCount] = useState(0);
  const handleOnIncrement = () =>{
    setCount(prev => prev + 1)
  }
  const handleOnDecrement = () =>{
    setCount(prev => prev -1)
  }
  const handleOnreset = () =>{
    setCount(0)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleOnIncrement}>Increment</button>
      <button onClick={handleOnDecrement}>Decrement</button>
      <button onClick={handleOnreset}>Reset</button>
      <hr />

      <Objects/>
      <hr />
      <DerivedState/>
    </div>
  )
}

export default App