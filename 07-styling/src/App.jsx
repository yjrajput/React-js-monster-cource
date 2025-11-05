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
                          <h3>rating: <span style={{padding: '1px 6px', borderRadius: '30px'}} className={items.rating > 8 ? 'highRating' : 'lowRating'}>{items.rating}</span></h3>
                          <p>{items.description}</p>
                          <p>Genere: {items.genre}</p>

                          <div>
                          <button className={items.rating > 8 ? 'highRating' : 'lowRating' }>Watch now</button>
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