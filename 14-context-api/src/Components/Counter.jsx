import { UseCustomHook } from "./ComponentsContext"

const Counter = () => {
    const {counter, handleOnClick} = UseCustomHook()
  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={handleOnClick}>Increment</button>
    </div>
  )
}

export default Counter