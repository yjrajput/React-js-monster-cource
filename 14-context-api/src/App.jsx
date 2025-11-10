import React from 'react'
import ComponentsContext from './Components/ComponentsContext'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'
import ComponentD from './Components/ComponentD'
import Counter from './Components/Counter'
const App = () => {
  return (
    <div>
    <ComponentsContext>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      <Counter/>
    </ComponentsContext>

      <ComponentD>
        <h1>Hello my name is component D</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet rerum eius, sequi, nam aut explicabo deserunt numquam aspernatur et ea vitae facere soluta velit culpa quaerat ex dolores pariatur?</p>
        <button>Learn more</button>
      </ComponentD>
    </div>
  )
}

export default App