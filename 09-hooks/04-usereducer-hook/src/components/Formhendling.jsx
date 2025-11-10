import React, { useReducer } from 'react'

const Formhendling = () => {
    const initialvalue = {
        name: '',
        email: '',
        password:"",
        phonenumber: '',
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'userName':{
                return {...state, name: action.payload}
            }
            case 'userEmail':{
                return {...state, email: action.payload}
            }
            case 'userPassword':{
                return {...state, password: action.payload}
            }
            case 'userNumber':{
                return {...state, phonenumber: action.payload}
            }
        }
    }

    const[state, dispatch] = useReducer(reducer, initialvalue);

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        console.log(state)
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder='name' onChange={(event) => dispatch({type: 'userName', payload: event.target.value})}/>
            <input type="email" placeholder='name' onChange={(event) => dispatch({type: 'userEmail', payload: event.target.value})}/>
            <input type="password" placeholder='name' onChange={(event) => dispatch({type: 'userPassword', payload: event.target.value})}/>
            <input type="number" placeholder='name' onChange={(event) => dispatch({type: 'userNumber', payload: event.target.value})}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formhendling