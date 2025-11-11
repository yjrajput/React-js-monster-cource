import  { memo, useCallback, useState } from 'react'


const Button = memo(({children, onClick}) =>{
  console.log(`Rendering button: ${children}`)
  return(
    <button className={`${children === 'Increment' ? 'first-class' : 'second-class'}`} onClick={onClick}>
      {children}
    </button>
  )
})

const App = () => {
  const[count, setCount] = useState(0);

  // const handleOnIncrement = () =>{
  //   setCount((prev) => prev + 1)
  // }
  // const handleOnDecerment = () =>{
  //   setCount((prev) => prev - 1)
  // }

  const handleOnDecerment = useCallback(()=>{
    setCount((prev) => prev - 1)
  }, [])

  const handleOnIncrement = useCallback(()=>{
    setCount((prev) => prev + 1)
  }, [])
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick = {handleOnIncrement}>Increment</Button>
      <Button onClick = {handleOnDecerment}>Decrement</Button>
    </div>
  )
}

export default App