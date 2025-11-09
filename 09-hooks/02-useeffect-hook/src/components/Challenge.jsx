import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Challenge = () => {
    const[count, setCount] = useState(0);
    const[inputValue, setInputValue] = useState('');

    useEffect(() =>{
        document.title = `Increment: ${count}`
    }, [count])
  return (
    <div>
        <h1>useEffect Challenge</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

        <h3>Name: {inputValue}</h3>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  )
}

export default Challenge