import React from 'react'
import { useRef } from 'react'
import ForwordRef from './components/ForwordRef';

const App = () => {
  const userName = useRef();
  const password = useRef();

  const handleOnSubmit = (event) =>{
    event.preventDefault();
      console.log(userName.current.value)
      console.log(password.current.value)
  }
  return (
    <div>
      <h1>useRef hook</h1>
      <form onSubmit={handleOnSubmit}>
        <input ref={userName} type="text" placeholder='username'/>
        <input ref={password} type="password" />
        <button type='submit'>Submit</button>
      </form>
      <hr />
      <ForwordRef/>
    </div>
  )
}

export default App