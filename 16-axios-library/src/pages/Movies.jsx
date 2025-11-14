import { useEffect, useState } from 'react'
import { getMovie } from '../services/ServiceProvider';


const Movies = () => {
    const [data, setdata] = useState([]);

    const getMoviedata = async () =>{
        const response = await getMovie()
        setdata(response.data.Search)
    }

   
    useEffect(()=>{
        getMoviedata();
    }, [])
  return (
    <div className='container'>
        <div className='card-container'>
            {
                data.map((items) =>(
                    <div  key={items.imdbID} className='card'>
                        <div className='image-container'>
                            <img src={items.Poster} alt={items.Title} />
                        
                        </div>
                        <div className='btn-container'>
                            <button className='watch-btn'>Watch Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Movies