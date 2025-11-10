import React, { forwardRef, useId, useRef } from 'react'

const ForwordRef = () => {
    const username = useRef();
    const password = useRef();

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        console.log(username.current.value, password.current.value)
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <TakeForwordRef lable = 'username' ref = {username}/>
            <TakeForwordRef lable = 'password' ref = {password}/>

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ForwordRef


const TakeForwordRef = forwardRef((props, ref) =>{
    const id = useId()
    return(
        <div key={id}>
            <label htmlFor="lable">{props.lable}</label>
            <input type="text" ref={ref} />
        </div>
    )
})