import React, { useReducer} from 'react'

const Counter = () => {
    const initialvalue = {count: 0, inputValue: ''}


    const reducer = (state, action) =>{
        switch(action.type){
            case 'increment':{
                return {...state, count: state.count + 1}
            }
            case 'decrement':{
                return {...state, count: state.count -1}
            }
            case 'incrementByAmount':{
                return {...state, count: state.count + action.payload}
            }
            case 'decrementByAmount':{
                return {...state, count: state.count - action.payload}
            }
            case 'inputVlaue':{
                return {...state, inputValue: action.payload}
            }
            case 'reset':{
                return {count: 0}
            }
        }
    }


    const handleOnIncrement = () =>{
        dispatch({type: 'incrementByAmount', payload: Number(state.inputValue)})
    }


   

    const [state, dispatch] = useReducer(reducer, initialvalue)
  return (
    <div>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={handleOnIncrement}>IncrementByAmount</button>
        <button onClick={() => dispatch({type: 'decrementByAmount', payload: Number(state.inputValue)})}>DecrementByAmount</button>


            <input type="number"  onChange={(e) => dispatch({type: 'inputVlaue', payload: e.target.value })} />
       
    </div>
  )
}

export default Counter