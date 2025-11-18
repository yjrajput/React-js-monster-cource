import React from 'react'
import { useRouteError } from 'react-router-dom'

const Erroepage = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>Opps! An error occurred.</h1>
        {
            error && <p>{error.data}</p>
        }
    </div>
  )
}

export default Erroepage