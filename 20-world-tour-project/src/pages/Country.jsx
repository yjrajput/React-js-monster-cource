import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/Loader';
import { NavLink } from 'react-router-dom';
const Country = () => {
  const[isPending, startTransition] = useTransition();
  const[countrys, setCountrys] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');


  const filterCOuntrys = () =>{
    
  }

  useEffect(()=>{
    startTransition(async() =>{
    const res =await getCountryData();
    setCountrys(res.data);
      window.scrollTo(0, 0);
    })
  }, [])

  

  if(isPending) return <Loader/>

  return (
    <div className='country-section'>
      
       
        <div className='container country-container'>
          
          <div className='search-container-grid'>
                <div className='input-search'>
                    <input type="text" placeholder='Search' value={search} onChange={(event) => setSearch(event.target.value)}/>
                </div>

                <div className='compaire-container'>
                  <button>Asc</button>
                  <button>Dec</button>
                </div>

                <div className='drop-dwon-search'>
                    <select >
                      <option value="all">All</option>
                      <option value="africa">Afarica</option>
                      <option value="asia">Asia</option>
                      <option value="europe">Europe</option>
                      <option value="aearica">Aearica</option>
                      <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
           
          
            <div className='country-grid'>
                
                  {
                    countrys.map((items, index) =>(
                      <div key={index} className='country-card'>
                          <div className='country-image-container'>
                              <img src={items.flags.png} alt="" />
                          </div>

                          <div className='country-content-container'>
                              <h3>{items.name.common}</h3>
                              <p>Population: <span>{items.population}</span></p>
                              <p>Region: <span>{items.region}</span></p>
                              <p>Capital: <span>{items.capital}</span></p>

                              <div className='btn-container'>
                                <NavLink to={`/country/${items.name.common}`}>
                                  <button>Read More</button>
                                </NavLink>

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