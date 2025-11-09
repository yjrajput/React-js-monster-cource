import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Challenge from './components/Challenge';
import CleanupFunction from './components/CleanupFunction';
import FetchApi from './components/FetchApi';
import AyscAwaitFecth from './components/AyscAwaitFecth';

const App = () => {
  const [date, setdate] = useState('');

  useEffect(() =>{
    setInterval(() =>{
      const updatedDate = new Date();
      setdate(updatedDate.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div>
      <h1>Date: {date}</h1>
      <hr />
      <Challenge/>
      <hr />
      <CleanupFunction/>
      <hr />
      <FetchApi/>
      <hr />
      <AyscAwaitFecth/>
    </div>
  )
}

export default App