import React from 'react'
import { useRef } from 'react'

const Counter = ({myBioData}) => {
    const renderCount = useRef(0);
    console.log(renderCount)

  return (
    <div>
        <h1>
            Noting changed here but ive now render" {renderCount.current++} times(s)
            <p>my name is {myBioData.name}</p>
        </h1>
    </div>
  )
}

export default React.memo(Counter)