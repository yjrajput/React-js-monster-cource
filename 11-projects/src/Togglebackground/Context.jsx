import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Data = createContext()



const Context = ({children}) => {
    const[change, setChange] = useState(false);

    const handleOnCLick = () =>{
        setChange(!change)
    }
  return (
    <Data.Provider value={{change, handleOnCLick}}>
        {children}
    </Data.Provider>
  )
}

export default Context;


//custom hook
export const UseCustomhook = () =>{
    const data = useContext(Data)
    return data
}