import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/Loader';
const Country = () => {
  const[isPending, startTransition] = useTransition();
  const[countrys, setCountrys] = useState([])

  useEffect(()=>{
    startTransition(async() =>{
    const res =await getCountryData();
    setCountrys(res.data);
    console.log(countrys)
    })
  }, [])

  if(isPending) return <Loader/>

  return (
    <div className='country-section'>
        <div className='container country-container'>
            <div className='country-grid'>
                
                  {
                    countrys.map((items, index) =>(
                      <div key={index} className='country-card'>
                          <div className='image-container'>
                              <img src={items.flags.png} alt="" />
                          </div>

                          <div className='country-content-container'>
                              <h3>{items.name.common}</h3>
                              <p>Population: <span>{items.population}</span></p>
                              <p>Region: <span>{items.region}</span></p>
                              <p>Capital: <span>{items.capital}</span></p>

                              <div className='btn-container'>
                                <button>Read More</button>
                              </div>
                          </div>
                      </div>
                    ))
                  }
                
            </div>
        </div>
    </div>
  )
}

export default Country