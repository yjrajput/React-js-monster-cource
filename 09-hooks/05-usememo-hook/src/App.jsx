import React from 'react'
import ReactMemo from './components/ReactMemo'
import UseMemo from './components/UseMemo'
import Exampleone from './components/Exampleone'
import UserList from './components/UserList '

const App = () => {
  return (
    <div>
        <ReactMemo/>
        <hr />

        <UseMemo/>
        <hr />

        <Exampleone/>
        <hr />
        <UserList/>
    </div>
  )
}

export default App