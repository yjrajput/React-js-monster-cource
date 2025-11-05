import React from 'react'

const PassingjsxAsProps = ({children, name, age, greeting}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{greeting}</p>
        {children}
    </div>
  )
}

export default PassingjsxAsProps