import React, { useMemo } from 'react'
import { useState } from 'react'
import Counter from './Counter'

const ReactMemo = () => {
    const[count, setCount] = useState(0)
    const myBioData = useMemo(() =>{
      return {
        name:'yuvraj singh rathore',
        age: 22
      }
    },[])
  return (
    <div>
        <button onClick={() => setCount((prev) => prev + 1)} className='btn'>{count}</button>

        <Counter myBioData = {myBioData} />
    </div>
  )
}

export default ReactMemo