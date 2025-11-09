import React, { useState } from 'react'

const ControlledForm = () => {
    const[inputValue, setInputValue] = useState('')

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue)
        setInputValue("")
    }
  return (
    <div>
        <h1>Controlled Form</h1>

        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Enter your name' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm