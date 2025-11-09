import React, { useEffect, useState } from 'react'

const AyscAwaitFecth = () => {
    const[fetchData, setFectchData] = useState(null);
    const[loading, setLoading] = useState(true)

    const fetchMeals = async () =>{
        try{
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
            const data = await response.json()
            setFectchData(data.meals);
            setLoading(false);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchMeals();
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

export default AyscAwaitFecth