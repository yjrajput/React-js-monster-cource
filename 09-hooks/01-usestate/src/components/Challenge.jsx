import React, { useState } from 'react'

const Challenge = () => {
    const[count, setCount] = useState(0);
    const[inputValue, setInputVlaue] = useState('');

    const handleOnIncrement = () =>{
        if(inputValue){
            setCount(count + Number(inputValue))
        }else setCount((prev) => prev + 1)

        setInputVlaue("")
        
    }
    const handleOnDecerment = () =>{
        if(inputValue){
            setCount((prev) => prev - Number(inputValue))
        }else setCount((prev) => prev - 1)

        setInputVlaue("")
    }
    const handleOnReset = () =>{
        setCount(0)
    }

  return (
    <div className='container'>
        <div className='box'>
            <h1 className='heading'>useState Hook Challenge</h1>
            
            <div>
                <h3 className='count'>Count: <span className='number'>{count}</span></h3>
                <form >
                    <label>
                        Step:
                        <input type="text" value={inputValue} onChange={(event) => setInputVlaue(event.target.value)} />
                    </label>
                </form>

                <div className='btn-container'>
                    <button onClick={handleOnIncrement} disabled = {count >= 100}>Increment</button>
                    <button onClick={handleOnDecerment} disabled = {count <= 0}>Decrement</button>
                    <button onClick={handleOnReset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Challenge