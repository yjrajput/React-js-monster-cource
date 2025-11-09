import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CleanupFunction = () => {
    const[count, setCount] = useState(7777);
    useEffect(() =>{
       const timer = setInterval(() =>{
            setCount((prev) => prev + 1); 
        }, 1000)

        return () => clearInterval(timer)
    }, [])
  return (
    <div>
        <h1>My Subscriber On Youtube</h1>
        <h2>{count}</h2>
    </div>
  )
}

export default CleanupFunction