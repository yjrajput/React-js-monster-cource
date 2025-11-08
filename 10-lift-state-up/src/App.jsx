import React from 'react'
import Inputcomponents from './components/Inputcomponents'
import DiaplayConponent from './components/DiaplayConponent'
import { useState } from 'react'
const App = () => {
  const [input, setInput] = useState('');
  return (
    <div>
      <Inputcomponents input = {input} setInput = {setInput} />
      <DiaplayConponent input = {input}/>
    </div>
  )
}

export default App