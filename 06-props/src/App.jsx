import React from 'react'
import ParentToChild from './components/ParentToChild';
import Products from './components/Products';
import PassingjsxAsProps from './components/PassingjsxAsProps';

const User = (props) =>{
    return(
      <>
      <h1>My name is {props.name} and i'm {props.age}</h1>
      <p>My hobiess is: </p>
      <ul>
        {
          props.hobbies.map((items) =>(
            <li>{items}</li>
          ))
        }
      </ul>
      </>
    )
}

const App = () => {
  const name = 'yuvraj singh rathore';
  const age = 22
  const hobbies = ['playing', 'coding', 'sleeping', 'traveling']

  const products = [
    {id: 1, name: 'Laptop', price: 1500},
    {id: 2, name: 'Mobile', price: 1000},
    {id: 1, name: 'HeadPhones', price: 200},
  ]
  return (
    <div>
      <User name = {name} age = {age}  hobbies = {hobbies}/>

      <ParentToChild>
        <h1>Hello my name is yuvraj </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt explicabo unde sit magni facilis non laudantium quia sequi temporibus mollitia? Cum perspiciatis suscipit ratione iusto maxime quidem non debitis odit.</p>
      </ParentToChild>

      <Products products = {products}/>

      <PassingjsxAsProps
      name = 'yuvraj singh rathore'
      age = '22'
      greeting = {
        <h1>Hello world this is passing jsx as props</h1>
      }
      >
        <p>Hobbies: learning, coding</p>
        <button>About me</button>
      </PassingjsxAsProps>
    </div>
  )
}

export default App