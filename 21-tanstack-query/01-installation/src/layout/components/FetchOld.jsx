import React, { useEffect, useState } from 'react'
import { fetchPost } from '../../Api/Api'

const FetchOld = () => {
  const [data, setData] = useState([])
  const fetchdata = async () =>{
      try{
          const res = await fetchPost();
          setData(res.data);
          console.log(res.data)
      }catch(error){
        console.log(error)
      }
  }
  useEffect(() =>{
    fetchdata();
  }, [])
  return (
    <div className='fetc-old'>
        <div className='container'>
            <div className='card-container'>
                <ul>
                  {
                    data.map((items) =>(
                      <div className='card' key={items.id}>
                          <h1>Title: {items.title}</h1>
                          <p>Body: {items.body}</p>
                      </div>
                    ))
                  }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FetchOld