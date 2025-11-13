import React from 'react'
import { useLoaderData } from 'react-router-dom'


const MovieDetails = () => {
    const movieDetails = useLoaderData();
    console.log(movieDetails)
    
  return (
    <div className='container'>
        <div className='movies-card-container'>
            <div className='card-container'>
             
                    <div  className='card'>
                        <div className='movie-image'>
                            <img src={movieDetails.Poster} alt="" />
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails