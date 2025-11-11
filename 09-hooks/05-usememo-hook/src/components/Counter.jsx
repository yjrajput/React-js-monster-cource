import React from 'react'
import { useRef } from 'react'

const Counter = () => {
    const renderCount = useRef(0);
    console.log(renderCount)

  return (
    <div>
        <h1>
            Noting changed here but ive now render" {renderCount.current++} times(s)
        </h1>
    </div>
  )
}

export default React.memo(Counter)