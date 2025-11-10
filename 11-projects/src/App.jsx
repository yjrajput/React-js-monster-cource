// import React from 'react'
// import ToggleButton from './ToggleButton/ToggleButton'
// import TodoList from './TodoList/TodoList'
import Context from "./Togglebackground/Context"
import ToggleBackgroundChange from "./Togglebackground/ToggleBackgroundChange"

const App = () => {
  return (
    <>
      {/* <ToggleButton/> */}
      {/* <TodoList/> */}
      <Context>
        <ToggleBackgroundChange/>
      </Context>
    </>
  )
}

export default App