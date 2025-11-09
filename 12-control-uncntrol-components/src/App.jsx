import React from 'react'
import ControlledForm from './components/ControlledForm'
import UncontrolledComponent from './components/UncontrolledComponent'

const App = () => {
  return (
    <div>
      <ControlledForm/>
      <hr />
      <UncontrolledComponent/>
    </div>
  )
}

export default App