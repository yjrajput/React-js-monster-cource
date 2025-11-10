import { UseCustomHook } from "./ComponentsContext"
const ComponentA = () => {
    const data = UseCustomHook()
  return (
    <div>
        <h1>Hello i'm from component A my name is {data.name} and i'm {data.age} year old.</h1>
    </div>
  )
}

export default ComponentA