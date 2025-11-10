import React, { useState } from 'react'

import { createContext } from 'react'

export const Data = createContext()

const ComponentsContext = ({children}) => {
    const[counter, setCounter] = useState(0);

    const handleOnClick = () =>{
        setCounter((prev) => prev + 1)
    }
    const name = 'yuvraj singh rathore';
    const age = 22;
  return (
    <Data.Provider value={{name, age, counter, handleOnClick}}>
        {children}
    </Data.Provider>
  )
}

export default ComponentsContext;

