import React from 'react'

const UncontrolledComponent = () => {
    const handleOnSubmit = (event) =>{
        event.preventDefault();

        const dataValue = document.querySelector('#inputValue').value;
        console.log(dataValue)
    }
  return (
    <div>
        <h1>Uncontrollded Component</h1>

        <form onSubmit={handleOnSubmit}>
            <input id='inputValue' type="text" placeholder='Enter your name' />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledComponent