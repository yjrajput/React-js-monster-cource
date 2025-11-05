import {data} from './db/data'

const App = () => {
  return (
    
        <div className='container'>
          
            <ul className='card-container'>
              {
                data.map((items) =>(
                  <div className='card' key={items.id}>
                      <div className='image-container'>
                        <img src={items.image} alt={items.title} />
                      </div>

                      <div className='content-box'>
                          <h1>Name: {items.title}</h1>
                          <h3>rating: {items.rating}</h3>
                          <p>{items.description}</p>
                          <p>Genere: {items.genre}</p>

                          <div>
                          <button>Watch now</button>
                          </div>
                      </div>
                  </div>
                ))
              }
            </ul>
        </div>
  
  )
}

export default App