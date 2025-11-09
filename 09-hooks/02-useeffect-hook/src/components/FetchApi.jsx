import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchApi = () => {
    const[fetchData, setFetchData] = useState(null) ;
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((data) => {
        setFetchData(data.meals)
        setLoading(false)
    })
    .catch((error)=> {
        console.log(error)
        setLoading(false)
    })
    
    }, [])

    return (
        
    <div>
        { loading ? <h1>loading....</h1> : 
            fetchData.map((items) =>(
                <li key={items.idMeal}>{items.strMeal}</li>
            ))
        }
    </div>
  )
}

export default FetchApi