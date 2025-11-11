import React from 'react'
import { useState } from 'react'
import Counter from './Counter'

const ReactMemo = () => {
    const[count, setCount] = useState(0)
  return (
    <div>
        <button onClick={() => setCount((prev) => prev + 1)} className='btn'>{count}</button>

        <Counter />
    </div>
  )
}

export default ReactMemo