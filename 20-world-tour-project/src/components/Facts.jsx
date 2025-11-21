import React from 'react'
import country from '../api/country.json'
const Facts = () => {
  return (
    <div className='fact-section'>
      <div className='container fact-container'>
          <div className='heading-container'>
              <h2 className='heading'>Here are the interesting fact we're proud of</h2>
          </div>



          <div className='card-container'>

            {
              country.map(({country,capital,population,interestingFact}) =>(
                  <div key={country} className='card'>
                    <h3>{country}</h3>
                    <p>Capital: <span>{capital}</span></p>
                    <p>Population: <span>{population}</span></p>
                    <p>Intrestingfact: <span>{interestingFact}</span></p>
              </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Facts