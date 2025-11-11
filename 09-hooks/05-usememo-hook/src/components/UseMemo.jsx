import { useMemo } from 'react'

import { useState } from 'react';


const ExpensiveComponenent = () =>{
    const sum = () =>{
        console.log('calculate sum.....')
        let i = 0;

        for(i = 0; i<= 1000000000; i++){
            i = i + 1
        };

        return i;
    }
    const total = useMemo(() =>{
        return sum()
    }, [])
    // const total = sum()

    return <p>Sum: {total}</p>
}

const UseMemo = () => {
    const[count, setCount] = useState(0)
  return (
    <div>

        <ExpensiveComponenent/>

        <button onClick={() => setCount(count + 1)} className='btn'>Re render parent</button>

        <h1>Count: {count}</h1>
    </div>
  )
}

export default UseMemo