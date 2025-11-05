import React from 'react'
import './App.css';
import {data} from '../db/data'
import Card from './components/Card';
const App = () => {
  return (
    <div className='container'>
        <ul className='card-container'>
            {
               data.map((items) =>(
                <Card key={items.id} items={items}/>
               ))
            }
        </ul>
    </div>
  )
}

export default App