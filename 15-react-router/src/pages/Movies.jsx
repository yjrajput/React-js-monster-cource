
import { useLoaderData } from 'react-router-dom'

const Movies = () => {
  const moviesdata = useLoaderData()

  return (
    <div className='container'>
        <div className='movies-card-container'>
            <div className='card-container'>
                {
                  moviesdata.Search.map((items) =>(
                    <div key={items.imdbID} className='card'>
                        <div className='movie-image'>
                            <img src={items.Poster} alt="" />
                        </div>
                        <div className='card-content'>
                        <h1>{items.Title}</h1>
                        <p>{items.Year}</p>
                        </div>
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Movies