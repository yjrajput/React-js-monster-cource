
import { NavLink, useLoaderData } from 'react-router-dom'

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
                        <NavLink to={`/movies/${items.imdbID}`}>
                        <button className='watch-btn'>Watch Now</button>
                        </NavLink>
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